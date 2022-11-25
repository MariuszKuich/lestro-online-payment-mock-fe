import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankSelectComponent } from './bank-select/bank-select.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { BankLoginComponent } from './bank-login/bank-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TransferConfirmationComponent } from './transfer-confirmation/transfer-confirmation.component';

const appRoutes: Routes = [
  { path: 'new/:paymentUUID', component: BankSelectComponent },
  { path: 'bank-login', component: BankLoginComponent },
  { path: 'confirm-transfer', component: TransferConfirmationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BankSelectComponent,
    HeaderComponent,
    FooterComponent,
    BankLoginComponent,
    TransferConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
