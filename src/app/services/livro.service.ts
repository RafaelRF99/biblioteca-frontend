import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILivro } from '../interfaces/livro';
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

  getAll(): Observable<ILivro[]> {
    return this.http.get<ILivro[]>(this.apiUrl);
  }

  filterCategory(category: string): Observable<ILivro[]> {
    const url = `${this.apiUrl}/filter?category=${encodeURIComponent(
      category
    )}`;

    return this.http.get<ILivro[]>(url);
  }
}
