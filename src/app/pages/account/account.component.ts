import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/components/transaction/transaction.component';
import Chart from 'chart.js/auto'
import { Category } from 'src/app/Interface/category';

interface Account {
  totalAvailable: number,
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: Account = {
    totalAvailable: 2000
  }

  public chart: any;
  public chart2: any;
  public chart3: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("incomeAndExpenseCanvas", {
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

    // this.chart2 = new Chart("incomeAndExpenseCanvas2", {
    //   type: 'pie',
    //   data: {
    //     labels: ['05-10', '05-11', '05-12', 'Current' ],
    //     datasets: [
    //       {
    //         label: "Income",
    //         data: ['467','576', '572', '79', '92', '574', '573', '576'],
    //         backgroundColor: ['blue', 'green', 'red', 'cyan', 'yellow', 'purple', 'orange', 'gray']
    //       },
    //       // {
    //       //   label: "Expense",
    //       //   data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
    //       //   backgroundColor: 'red'
    //       // }
    //     ]
    //   },
    //   options: {
    //     // aspectRatio:2.5
    //     responsive: true
    //   }
    // });

    // this.chart3 = new Chart("incomeAndExpenseCanvas3", {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['05-10', '05-11', '05-12', 'Current' ],
    //     datasets: [
    //       {
    //         label: "Income",
    //         data: ['467','576', '572', '79', '92', '574', '573', '576'],
    //         backgroundColor: ['blue', 'green', 'cyan', 'red']
    //       },
    //       // {
    //       //   label: "Expense",
    //       //   data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
    //       //   backgroundColor: 'red'
    //       // }
    //     ]
    //   },
    //   options: {
    //     // aspectRatio:2.5
    //     responsive: true
    //   }
    // });
  }

  lastTransactions: Array<Transaction> = [
    {
      title: "t1fdsfds sdfsdfds fsdfsdss fds fds",
      description: "la t1",
      total: 444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16")
    },
    {
      title: "t2",
      description: "la t2",
      total: -444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16")
    },
    {
      title: "t3",
      description: "la t3",
      total: 444,
      totalAvailable: 2,
      createdOn: new Date("2023-07-16")
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
}
