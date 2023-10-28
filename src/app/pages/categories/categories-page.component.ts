import { Component } from '@angular/core';
import { Category } from 'src/app/Interface/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {

  saveCategory() {
    //
    console.log('...guardando')
  }

  category: Category = {
    id: 0,
    name: 'example =)',
    isActive: false,
    accountId: 0,
    color: ''
  }

  categories: Category[] = [
    {
      "id": 8,
      "name": "Taxes",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 10,
      "name": "Autoservicio",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 16,
      "name": "Transport",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "green"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'green'
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'green'
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'green'
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'green'
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'orange'
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      color: "purple"
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1,
      "icon": "heroTag",
      "color": 'green'
    },
  ];
}
