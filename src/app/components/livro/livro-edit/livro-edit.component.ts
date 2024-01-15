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
  ) {}

  ngOnInit(): void {
    this.categories = categoryList;
    this.bookId = this.route.snapshot.params['id'];
    this.service.getAll().subscribe((livros) => {
      const index = livros.find((livro) => livro._id === this.bookId);
      if (index) {
        this.form.patchValue(index);
      }
    });
    this.form = this.formBuilder.group({
      _id: [this.bookId],
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

  delete() {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      this.service.delete(this.bookId).subscribe(
        () => {
          console.log('Livro excluído com sucesso!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  send() {
    if (this.form.valid) {
      this.service.edit(this.form.value).subscribe(
        () => {
          console.log('Editado com sucesso!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
