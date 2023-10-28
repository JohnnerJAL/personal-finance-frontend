import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Interface/Transaction';
import Chart from 'chart.js/auto'
import { Category } from 'src/app/Interface/category';

interface Account {
  totalAvailable: number,
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

  public chart: any;

  ngOnInit(): void {
    this.createChart();
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
          color: 'orange'
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
          color: 'green'
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
          color: 'green'
        }
      ]
    ]
  ]
}
