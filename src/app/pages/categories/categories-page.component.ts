import { Component } from '@angular/core';
import { Category, CategoryDTO } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {

  categories: Category[] = [];

  category: CategoryDTO = {
    name: '',
    isActive: true,
    accountId: 1,
    color: '',
    icon: 'heroTag'
  }

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService
      .getUserCategories()
      .subscribe(data => this.categories = data)
  }

  saveCategory() {
    this.categoryService
      .createCategory(this.category)
      .subscribe(data => this.categories.unshift(data))
  }

}
