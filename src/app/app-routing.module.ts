import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account/account-page.component';
import { TransactionsPageComponent } from './pages/transactions/transactions-page.component';
import { FeaturesPageComponent } from './pages/features/features-page.component';
import { CategoriesPageComponent } from './pages/categories/categories-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: "account", component: AccountPageComponent },
  { path: "transactions", component: TransactionsPageComponent },
  { path: "features", component: FeaturesPageComponent },
  { path: "categories", component: CategoriesPageComponent },
  { path: "**", component: AccountPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
