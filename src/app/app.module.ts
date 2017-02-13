import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { EditBankPage } from '../pages/editBank/editBank';
import { BankService } from '../service/bank.service';
import { CreateBankPage } from '../pages/createBank/createBank';
import {orderBy} from '../pipes/orederBy.pipe';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditBankPage,
    CreateBankPage, orderBy
  ],
  imports: [
    IonicModule.forRoot(MyApp), FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditBankPage,
    CreateBankPage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Storage, BankService]
})
export class AppModule { }