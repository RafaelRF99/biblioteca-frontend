import { Component, Input } from '@angular/core';
import { ILivro } from 'src/app/interfaces/livro';
import { MatDialog } from '@angular/material/dialog';
import { LivroModalComponent } from '../livro-modal/livro-modal.component';

@Component({
  selector: 'app-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.scss'],
})
export class LivroCardComponent {
  @Input() livro!: ILivro;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(LivroModalComponent, {
      data: { livro: this.livro },
    });

    dialogRef.afterClosed().subscribe();
  }
}
