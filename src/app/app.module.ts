import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { AccountComponent } from './pages/account/account.component';
import { NavComponent } from './components/nav/nav.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroCurrencyDollar,
  heroDocumentText,
  heroIdentification,
  heroTag, heroBars4, heroPlusCircle, heroPuzzlePiece, heroQueueList, heroScale, heroStar, heroTrash, heroUser, heroWallet, heroChartPie, heroChartBar, heroCubeTransparent, heroExclamationCircle, heroHome, heroPencilSquare, heroRectangleGroup, heroSquares2x2, heroCog8Tooth, heroBanknotes, heroArrowSmallDown, heroArrowSmallUp } from '@ng-icons/heroicons/outline';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomesComponent,
    AccountComponent,
    NavComponent,
    TransactionComponent,
    ExpensesComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroHome,
      heroDocumentText,
      heroUser,
      heroTag,
      heroIdentification,
      heroBars4,
      heroPuzzlePiece,
      heroSquares2x2,
      heroScale,
      heroChartBar,
      heroChartPie,
      heroCog8Tooth,
      heroArrowSmallDown,
      heroArrowSmallUp,
      heroCurrencyDollar
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
