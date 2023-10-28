import { Component } from '@angular/core';
import { Transaction } from 'src/app/Interface/Transaction';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent {
  transactions: Array<Array<Array<Transaction>>> = [
    [
      [
        {
          id: 1,
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          id: 2,
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
          id: 3,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green'
        }
      ],
      [
        {
          id: 4,
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          id: 5,
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
          id: 6,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green'
        }
      ]
    ],
    [
      [
        {
          id: 7,
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          id: 8,
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
          id: 9,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green'
        }
      ]
    ],
    [
      [
        {
          id: 10,
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          id: 11,
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
          id: 12,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green'
        }
      ]
    ]
  ]
}
