import { Component } from '@angular/core';
import { Transaction } from 'src/app/components/transaction/transaction.component';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent {

  transactions: Array<Transaction> = [
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

}
