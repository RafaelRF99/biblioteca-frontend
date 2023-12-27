import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/app/services/livro.service';
import { categoryList } from './../../../constants/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-launch',
  templateUrl: './livro-launch.component.html',
  styleUrls: ['./livro-launch.component.scss'],
})
export class LivroLaunchComponent implements OnInit {
  categories!: string[];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LivroService,
    private router: Router
  ) {
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

  ngOnInit(): void {
    this.categories = categoryList;
  }

  send() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.router.navigate(['/']);
    }
  }
}
