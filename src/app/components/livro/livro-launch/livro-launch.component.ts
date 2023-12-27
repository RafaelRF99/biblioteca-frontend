import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-launch',
  templateUrl: './livro-launch.component.html',
  styleUrls: ['./livro-launch.component.scss'],
})
export class LivroLaunchComponent {
  categories: string[] = ['Ação', 'Terror', 'Animição', 'Comédia'];

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LivroService) {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [
        null,
        Validators.compose([Validators.required, Validators.minLength(50)]),
      ],
      local: [
        null,
        Validators.compose([Validators.required, Validators.minLength(20)]),
      ],
      category: [this.categories, Validators.required],
      bookCover: [
        null,
        Validators.compose([Validators.required, Validators.minLength(20)]),
      ],
      launch: [null, Validators.required],
      createAt: [new Date()],
    });
  }

  send() {
    const dateNow = new Date();

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
