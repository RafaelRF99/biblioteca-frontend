import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private service: SizeService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private livroService: LivroService
  ) {
    this.subscription = this.service.largeStatusChanged.subscribe((status) => {
      this.largeStatus = status;
    });
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

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
  }
}
