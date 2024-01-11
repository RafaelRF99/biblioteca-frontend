import { Component } from '@angular/core';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  largeStatus: boolean = false;
  livros!: ILivro[];
  notFound!: boolean;

  constructor(private http: LivroService) {
    this.http.getAll().subscribe((livro) => {
      try {
        this.livros = livro;
        this.notFound = true;
      } catch (error) {
        this.notFound = false;
      }
    });
  }
}
