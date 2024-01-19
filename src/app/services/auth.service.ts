import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiAuth = environment.apiAuth;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const urlToken = this.apiAuth;

    return this.http.post<any>(urlToken, { email, password }).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout() {
    localStorage.clear();
    location.reload();
    this.router.navigate(['/']);
  }

  getToken() {
    const token = !!localStorage.getItem('token');
    return token;
  }
}
