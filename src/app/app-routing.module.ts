import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: "account", component: AccountComponent },
  { path: "incomes", component: IncomesComponent },
  { path: "expenses", component: ExpensesComponent },
  { path: "**", component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
