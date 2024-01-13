import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  constructor(
    private categoryService: CategoryService
  ) { }

  @Input()
  category: Category = {
    id: 0,
    name: '',
    isActive: true,
    accountId: 0,
    icon: 'heroTag',
    color: 'black'
  };

  isDetailsModalOpen = false

  detailModalToogle() {
    this.isDetailsModalOpen = !this.isDetailsModalOpen;
  }

  @Output() categoryEditEvent = new EventEmitter<Category>();

  updateCategory() {
    this.categoryEditEvent.emit(this.category)
  }
  
}
