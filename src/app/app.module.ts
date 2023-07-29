import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

import { AccountPageComponent } from './pages/account/account-page.component';
import { TransactionsPageComponent } from './pages/transactions/transactions-page.component';

import {
  heroCurrencyDollar,
  heroDocumentText,
  heroIdentification,
  heroTag,
  heroExclamationTriangle,
  heroPuzzlePiece,
  heroScale,
  heroUser,
  heroChartPie,
  heroSquares2x2,
  heroCog8Tooth
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    AccountNavComponent,
    MainNavComponent,
    AccountPageComponent,
    TransactionComponent,
    TransactionsComponent,
    TransactionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroDocumentText,
      heroUser,
      heroTag,
      heroIdentification,
      heroPuzzlePiece,
      heroSquares2x2,
      heroScale,
      heroChartPie,
      heroCurrencyDollar,
      heroExclamationTriangle,
      heroCog8Tooth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
