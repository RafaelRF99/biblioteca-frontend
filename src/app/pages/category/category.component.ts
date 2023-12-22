import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  largeStatus: boolean = false;
  subscription: Subscription;

  livros!: ILivro[];
  selectedCategory!: string;

  notFound!: boolean;

  constructor(private service: SizeService, private http: LivroService) {
    this.subscription = this.service.largeStatusChanged.subscribe((status) => {
      this.largeStatus = status;
    });
    this.http
      .filterCategory(this.service.selectedCategory)
      .subscribe((livro) => {
        try {
          this.livros = livro;
          this.selectedCategory = livro.filter(
            (livro) => livro.category
          )[0].category;
          this.notFound = true;
        } catch (error) {
          this.notFound = false;
        }
      });
  }

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
  }
}
