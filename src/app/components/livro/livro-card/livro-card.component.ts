import { Component, Input } from '@angular/core';
import { ILivro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.scss'],
})
export class LivroCardComponent {
  @Input() livro!: ILivro;
}
