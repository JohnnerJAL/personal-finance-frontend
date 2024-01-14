import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction, TransactionDTO } from '../Interface/Transaction'
import { Create } from '../pages/account/account-page.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactionsByAccountId() {
    return this.http.get<Transaction[]>('http://localhost:8080/transactions?accountId=1')
  }

  saveTransaction(transaction: Create) {
    return this.http.post<Transaction>('http://localhost:8080/transactions', transaction)
  }
}
