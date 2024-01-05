import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ILivro } from 'src/app/interfaces/livro';
import { AuthService } from 'src/app/services/auth.service';
import { LivroCardComponent } from '../livro-card/livro-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-modal',
  templateUrl: './livro-modal.component.html',
  styleUrls: ['./livro-modal.component.scss'],
})
export class LivroModalComponent implements OnInit {
  livro: ILivro;
  token: boolean = false;
  urlById!: string;

  constructor(
    public dialogRef: MatDialogRef<LivroCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { livro: ILivro },
    private auth: AuthService,
    private router: Router
  ) {
    this.livro = this.data.livro;
    if (this.auth.getToken()) {
      this.token = true;
    }
  }

  ngOnInit(): void {
    if (this.livro._id) {
      this.urlById = `/edit/${this.livro._id}`;
    }
  }

  handleEdit(): void {
    this.dialogRef.close();
    this.router.navigate([this.urlById]);
  }
}
