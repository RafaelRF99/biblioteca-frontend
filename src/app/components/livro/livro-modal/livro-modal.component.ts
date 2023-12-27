import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILivro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-livro-modal',
  templateUrl: './livro-modal.component.html',
  styleUrls: ['./livro-modal.component.scss'],
})
export class LivroModalComponent implements OnInit {
  livro!: ILivro;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { livro: ILivro }) {}

  ngOnInit(): void {
    this.livro = this.data.livro;
  }
}
