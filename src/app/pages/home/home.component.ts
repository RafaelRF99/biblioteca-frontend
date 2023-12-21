import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILivro } from 'src/app/interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  largeStatus: boolean = false;
  subscription: Subscription;
  livros!: ILivro[];

  constructor(private service: SizeService, private http: LivroService) {
    this.subscription = this.service.largeStatusChanged.subscribe((status) => {
      this.largeStatus = status;
    });
    this.http.getAll().subscribe((livro) => {
      this.livros = livro;
      console.log(livro);
    });
  }

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
  }
}
