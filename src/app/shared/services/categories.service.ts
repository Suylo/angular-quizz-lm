import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../../_interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }

  getCategoryById(categoryId: number): Observable<Category[]> {
    return this.http.get<Category[]>(
      'http://localhost:3000/categories?id=' + categoryId
    );
  }
}
