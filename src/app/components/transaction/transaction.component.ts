import { Component, Input } from '@angular/core';

export interface Transaction {
  title: String,
  description: String,
  total: number,
  totalAvailable: Number
  createdOn: Date
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  @Input()
  transaction: Transaction = {
    title: '',
    description: '',
    total: 0,
    totalAvailable: 0,
    createdOn: new Date()
  }

}
