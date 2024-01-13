import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryDTO } from 'src/app/Interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getUserCategories() {
    return this.http.get<Category[]>('http://localhost:8080/categories?accountId=1')
  }

  createCategory(category: CategoryDTO) {
    return this.http.post<Category>('http://localhost:8080/categories', category)
  }

  updateCategory(category: Category) {
    return this.http.patch<Category>(`http://localhost:8080/categories/${category.id}`, category)
  }

}
