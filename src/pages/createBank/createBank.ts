import { Component } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { NavController } from 'ionic-angular';
@Component({
    selector: 'page-createBank',
    templateUrl: 'createBank.html',
    providers: [BankService]
})
export class CreateBankPage {

    bank: any;
    bankType: any;

    constructor(public navCtrl: NavController, private bankService: BankService) {
        this.bank = {};
        this.bank.notifications = [10, 3];
    }

    createBank() {
        console.log(this.bank);
        this.bankService.createBank(this.bank);
        this.navCtrl.pop();
    }

}
