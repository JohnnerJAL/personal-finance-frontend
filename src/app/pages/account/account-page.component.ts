import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Interface/Transaction';
import Chart from 'chart.js/auto'
import { Category } from 'src/app/Interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { TransactionService } from 'src/app/services/transaction.service';

interface Account {
  totalAvailable: number,
}

export interface Create extends Partial<Transaction> {
  transactionTemplate: {
    id: number,
    title: string,
    description: string,
    total: number,
    accountId: number,
    categoryId: number,
    type: string
  }
}

@Component({
  selector: 'app-account',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  account: Account = {
    totalAvailable: 2000
  }

  constructor(
    private categoryService: CategoryService,
    private transactionService: TransactionService
  ) { }

  public chart: any;

  "transactionTemplate": {
    "id": 1,
    "title": "sample",
    "description": "sample",
    "total": 100,
    "accountId": 1,
    "categoryId": 1,
    "type": "income"
  }

  transaction: Create = {
    transactionTemplate: {
      id: 1,
      title: "sample",
      description: "sample",
      total: 100,
      accountId: 1,
      categoryId: 1,
      type: "income"
    },
    // icon: 'heroTag',
    // color: 'orange',
    // categoryId: 1
  }

  ngOnInit(): void {
    this.createChart();

    this.categoryService.getUserCategories().subscribe(data => this.categories = data)
    this.transactionService.getTransactionsByAccountId().subscribe(data => this.lastTransactions = data)
  }

  saveTransaction() {

    console.log('prueba')
    this.transactionService.saveTransaction(this.transaction).subscribe(data => this.lastTransactions.unshift(data))
  }

  createChart(){
    this.chart = new Chart("resumeChartCanvas", {
      type: 'bar',
      data: {
        labels: ['05-10', '05-11', '05-12', 'Current' ],
        datasets: [
          {
            label: "Income",
            data: ['467','576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'rgba(9,68,121,1)'
          },
          {
            label: "Expense",
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: '#e84855'
          }
        ]
      },
      options: {
        // aspectRatio:2.5
        responsive: true
      }
    });
  }

  lastTransactions: Array<Transaction> = [
    {
      id: 1,
      title: "Restaurant",
      description: "la t1",
      total: 444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16"),
      icon: 'heroTag',
      color: 'orange',
      categoryId: 1
    },
    {
      id: 2,
      title: "Colombia Vacations",
      description: "la t2",
      total: -444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16"),
      icon: 'heroExclamationTriangle',
      color: 'purple',
      categoryId: 2
    },
    {
      id: 3,
      title: "Water & Electricity",
      description: "la t3",
      total: 444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16"),
      icon: 'heroTag',
      color: 'green',
      categoryId: 3
    }
  ];

  categories: Category[] = [
    {
      "id": 8,
      "name": "Taxes",
      "isActive": true,
      "accountId": 1
    },
    {
      "id": 10,
      "name": "Autoservicio",
      "isActive": true,
      "accountId": 1
    },
    {
      "id": 16,
      "name": "Transport",
      "isActive": true,
      "accountId": 1
    },
    {
      "id": 18,
      "name": "Angelbb",
      "isActive": true,
      "accountId": 1
    },
    {
      "id": 19,
      "name": "Thomasbb",
      "isActive": true,
      "accountId": 1
    }
  ];

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
          color: 'orange',
          categoryId: 1
        },
      ],
      [
        {
          id: 2,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green',
          categoryId: 2
        }
      ]
    ],
    [
      [
        {
          id: 3,
          title: "Water & Electricity",
          description: "la t3",
          total: 444,
          totalAvailable: 2,
          createdOn: new Date("2023-07-16"),
          icon: 'heroTag',
          color: 'green',
          categoryId: 3
        }
      ]
    ]
  ]
}


const example = [
  {
    "id": 2,
    "totalAvailable": 100.0,
    "createdOn": "2024-01-13",
    "transactionTemplate": {
      "id": 1,
      "title": "sample",
      "description": "sample",
      "total": 100.0,
      "accountId": 1,
      "categoryId": 1,
      "type": "income"
    }
  },
  {
    "id": 4,
    "totalAvailable": 200.0,
    "createdOn": "2024-01-13",
    "transactionTemplate": {
      "id": 1,
      "title": "sample",
      "description": "sample",
      "total": 100.0,
      "accountId": 1,
      "categoryId": 1,
      "type": "income"
    }
  },
  {
    "id": 5,
    "totalAvailable": 300.0,
    "createdOn": "2024-01-13",
    "transactionTemplate": {
      "id": 1,
      "title": "sample",
      "description": "sample",
      "total": 100.0,
      "accountId": 1,
      "categoryId": 1,
      "type": "income"
    }
  }
]