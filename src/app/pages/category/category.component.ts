import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  largeStatus: boolean = false;

  livros!: ILivro[];
  selectedCategory!: string;

  notFound!: boolean;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private livroService: LivroService
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.livroService.filterCategory(id).subscribe((livro) => {
          this.livros = livro;
          this.selectedCategory = id;
          this.notFound = livro.length > 0;
        });
      } else {
        this.livros = [];
        this.selectedCategory = '';
        this.notFound = false;
      }
    });
  }
}
