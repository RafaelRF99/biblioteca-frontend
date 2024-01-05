import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryList } from './../../../constants/category';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.scss'],
})
export class LivroEditComponent implements OnInit {
  categories!: string[];
  bookId: string = '';

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
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
    this.bookId = this.route.snapshot.params['id'];
    this.service.getAll().subscribe((livros) => {
      const index = livros.find((livro) => livro._id === this.bookId);
      if (index) {
        this.form.patchValue(index);
      }
    });
  }

  send() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.router.navigate(['/']);
    }
  }
}
