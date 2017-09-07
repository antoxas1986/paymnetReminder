import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { EditBankPage } from '../pages/editBank/editBank';
import { CreateBankPage } from '../pages/createBank/createBank';

import { TabsPage } from '../pages/tabs/tabs';
import { FormsModule } from '@angular/forms';

import { IonicStorageModule } from '@ionic/storage';
import { BankService } from '../service/bank.service';
import { orderBy } from '../pipes/orederBy.pipe';
import { NotificationService } from '../service/notification.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditBankPage,
    CreateBankPage, 
    orderBy
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    FormsModule, 
    BrowserModule, 
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditBankPage,
    CreateBankPage,
  ],
  providers: [
    { 
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    StatusBar,
    SplashScreen, 
    IonicStorageModule, 
    BankService, 
    NotificationService
  ]
})
export class AppModule { }
