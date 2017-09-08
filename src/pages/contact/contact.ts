import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BankService } from '../../service/bank.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  counter: any
  constructor(public navCtrl: NavController, private bankService: BankService) {
    this.counter = 0;
  }
  ionViewDidEnter() {
    this.counter = 0;
  }

  countClicks() {
    this.counter++;
  }
  deleteBanks() {
    this.counter = 0;
    this.bankService.deleteAllBanks();
  }
}
