import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Interface/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input()
  category: Category = {
    id: 0,
    name: '',
    isActive: true,
    accountId: 0,
    icon: 'heroTag',
    color: 'black'
  };

  showDetails(categoryId: number) {
    console.log(categoryId);
  }
  
}
