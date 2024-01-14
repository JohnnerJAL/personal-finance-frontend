import { Component, Input } from '@angular/core';
import { Transaction, Transaction2 } from 'src/app/Interface/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  // icon: 'heroTag',
  // icon: 'heroExclamationTriangle',
  @Input()
  transaction: Transaction2 = {
    id: 0,
    totalAvailable: 0,
    createdOn: new Date(),
    transactionTemplate: {
      id: 0,
      title: '',
      description: '',
      total: 0,
      accountId: 0,
      categoryId: 0,
      type: '',
      icon: 'heroTag',
      color: 'black'
    }
  }

  showDetails(transactionId: number) {
    console.log(transactionId);
  }

  showDetails2() {
    console.log('');
  }

}
