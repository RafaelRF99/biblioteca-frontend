import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  largeStatus: boolean = false;
  subscription: Subscription;

  search: string = '';
  books!: ILivro[];
  searchStatus!: boolean;

  constructor(private size: SizeService, private service: LivroService) {
    this.subscription = this.size.largeStatusChanged.subscribe((status) => {
      this.largeStatus = status;
    });
  }

  ngOnInit(): void {
    this.largeStatus = this.size.largeStatus;
    this.service.filterBook(this.search).subscribe((livro) => {
      this.books = livro;
      if (livro.length < 0) {
        this.searchStatus = false;
      } else {
        this.searchStatus = true;
      }
    });
  }

  handleSearch() {
    this.service.filterBook(this.search).subscribe((livro) => {
      this.books = livro;
      if (livro.length < 0) {
        this.searchStatus = false;
      } else {
        this.searchStatus = true;
      }
    });
  }
}
