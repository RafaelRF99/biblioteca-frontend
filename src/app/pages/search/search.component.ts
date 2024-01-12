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
export class SearchComponent {
  largeStatus: boolean = false;

  book!: ILivro;
  searchStatus!: boolean;

  onBookSelected(selectedBook: ILivro) {
    this.book = selectedBook;
    this.searchStatus = true;
  }
}
