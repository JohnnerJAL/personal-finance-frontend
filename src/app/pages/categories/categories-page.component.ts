import { Component, OnInit } from '@angular/core';
import { Category, CategoryDTO } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  categories: Category[] = [
    {
      id: 1,
      name: 'Autoservicio',
      isActive: true,
      accountId: 1
    },
    {
      id: 2,
      name: 'Autoservicio2',
      isActive: true,
      accountId: 1
    }
  ];

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

  updateCategory(event: Category) {
    this.categoryService
      .updateCategory(event)
      .subscribe(data => {
        const index = this.categories.findIndex(category => category.id === data.id);
        this.categories[index] = data;
      })
  }

}
