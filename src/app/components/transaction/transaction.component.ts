import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/Interface/Transaction';

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
    createdOn: new Date(),
    icon: 'heroTag',
    color: 'black'
  }

}
