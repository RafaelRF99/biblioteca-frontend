import { ILivro } from './../interfaces/livro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly apiUrl = environment.apiUrl;
  selectedCategory!: string;

  constructor(private http: HttpClient) {}

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }

  filterCategory(category: string): Observable<ILivro[]> {
    const url = `${this.apiUrl}/filter?category=${encodeURIComponent(
      category
    )}`;

    return this.http.get<ILivro[]>(url);
  }

  filterBook(text: string): Observable<ILivro[]> {
    return this.http
      .get<ILivro[]>(this.apiUrl)
      .pipe(
        map((livros) =>
          livros.filter((livro) => livro.title.toLowerCase().includes(text))
        )
      );
  }

  getAll(): Observable<ILivro[]> {
    return this.http.get<ILivro[]>(this.apiUrl);
  }

  create(livro: ILivro): Observable<ILivro> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token inválido');
    }

    const headers = new HttpHeaders({
      'x-access-token': token,
    });

    return this.http.post<ILivro>(this.apiUrl, livro, { headers });
  }

  edit(livro: ILivro): Observable<ILivro> {
    const url = `${this.apiUrl}/${livro._id}`;

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token inválido');
    }

    const headers = new HttpHeaders({
      'x-access-token': token,
    });

    return this.http.put<ILivro>(url, livro, { headers });
  }

  delete(id: string): Observable<ILivro> {
    const url = `${this.apiUrl}/${id}`;

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token inválido');
    }

    const headers = new HttpHeaders({
      'x-access-token': token,
    });

    return this.http.delete<ILivro>(url, { headers });
  }
}
