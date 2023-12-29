import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() selected = new EventEmitter<ILivro>();

  myControl = new FormControl('');
  options!: ILivro[];
  filteredOptions!: Observable<ILivro[]>;

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) =>
        this.livroService
          .filterBook(value ? value : '')
          .pipe(map((livros) => this._filter(value || '', livros)))
      )
    );
  }

  displayFn(livro: ILivro): string {
    return livro && livro.title ? livro.title : '';
  }

  private _filter(value: string, options: ILivro[]): ILivro[] {
    const filterValue = value;
    const filterOptions = options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
    return filterOptions.slice(0, 5);
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selected.emit(event.option.value);
  }

  handleFilter() {}
}
