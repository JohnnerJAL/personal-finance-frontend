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
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
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
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
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
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
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
          title: "Restaurant",
          description: "la t1",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'orange'
        },
        {
          title: "Colombia Vacations",
          description: "la t2",
          total: -444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroExclamationTriangle',
          color: 'purple'
        },
        {
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
