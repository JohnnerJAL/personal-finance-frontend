import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account/account-page.component';
import { TransactionsPageComponent } from './pages/transactions/transactions-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: "account", component: AccountPageComponent },
  { path: "transactions", component: TransactionsPageComponent },
  { path: "**", component: AccountPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
