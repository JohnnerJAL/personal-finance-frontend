import { Component, OnInit } from '@angular/core';
import { TransactionsByMonth } from 'src/app/Interface/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent implements OnInit {
  transactions: Array<TransactionsByMonth>  = []

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getTransactionsGroupedByMonthAndDay()
  }

  getTransactionsGroupedByMonthAndDay() {
    this.transactionService
      .getTransactionsByAccountId()
      .subscribe(data => this.transactions = data.transactionsGroupedByMonthAndDay)
  }

}
