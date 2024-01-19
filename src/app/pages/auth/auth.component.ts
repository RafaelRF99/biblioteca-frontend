import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  handleLogin() {
    const { email, password } = this.form.value;

    this.auth.login(email, password).subscribe(() => {
      console.log(email, password);
      try {
        this.router.navigate(['/']);
      } catch (error) {
        console.log('Algo de errado aconteceu, tente mais tarde...', error);
      }
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
