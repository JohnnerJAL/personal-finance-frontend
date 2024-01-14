import { Component, Input } from '@angular/core';
import { TransactionsByMonth } from 'src/app/Interface/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  @Input()
  transactions: Array<TransactionsByMonth> = [];
}
