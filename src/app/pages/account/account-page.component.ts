import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionsByMonth } from 'src/app/Interface/Transaction';
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

  categories: Array<Category> = []
  lastTransactions: Array<TransactionsByMonth> = []

  constructor(
    private categoryService: CategoryService,
    private transactionService: TransactionService
  ) { }

  public chart: any;

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
    this.createChart()
    this.categoryService.getUserCategories().subscribe(data => this.categories = data)
    this.getTransactionsGroupedByMonthAndDay()
  }

  getTransactionsGroupedByMonthAndDay() {
    this.transactionService
      .getTransactionsByAccountId()
      .subscribe(data => this.lastTransactions = data.transactionsGroupedByMonthAndDay)
  }

  saveTransaction() {
    this.transactionService
      .saveTransaction(this.transaction)
      // TODO SORT THIS IN THE BACKEND and push the new transaction to the state array
      .subscribe(() => this.getTransactionsGroupedByMonthAndDay())
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

}