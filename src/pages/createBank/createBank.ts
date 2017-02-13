import { Component } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-createBank',
    templateUrl: 'createBank.html',
    providers: [BankService]
})
export class CreateBankPage {

    bank: any;

    constructor(public navCtrl: NavController, private navParams: NavParams, private bankService: BankService) {
        this.bank = {};
    }

    createBank(bank) {
        console.log(bank);
        this.bankService.createBank(this.bank);
        this.navCtrl.pop();
    }

}
