import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { InputComponent } from './components/input/input.component';

import { AccountPageComponent } from './pages/account/account-page.component';
import { TransactionsPageComponent } from './pages/transactions/transactions-page.component';
import { FeaturesPageComponent } from './pages/features/features-page.component';
import { CategoriesPageComponent } from './pages/categories/categories-page.component';

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
import { CategoryComponent } from './components/category/category.component';
import { ButtonComponent } from './components/button/button.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
@NgModule({
  declarations: [
    AppComponent,
    AccountNavComponent,
    MainNavComponent,
    AccountPageComponent,
    TransactionComponent,
    TransactionsComponent,
    TransactionsPageComponent,
    InputComponent,
    FeaturesPageComponent,
    CategoriesPageComponent,
    CategoryComponent,
    ButtonComponent,
    DetailModalComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
