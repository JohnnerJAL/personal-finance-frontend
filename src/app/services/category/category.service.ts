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
    return this.http.get<Category[]>('http://localhost:3004/category/account/1')
  }

  createCategory(category: CategoryDTO) {
    return this.http.post<Category>('http://localhost:3004/category', category)
  }

}
