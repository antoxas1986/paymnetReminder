import { Component } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-editBank',
    templateUrl: 'editBank.html',
    providers: [BankService]
})
export class EditBankPage {

    bank: any;

    constructor(public navCtrl: NavController, private navParams: NavParams, private bankService: BankService) {
        this.bank = this.navParams.get('bank');
        console.log(this.bank);
    }
    removeBank(bank) {
        this.bankService.removeBank(bank);
        this.navCtrl.pop()
    }
    updateBank(bank) {
        this.bankService.updateBank(bank);
        this.navCtrl.pop()
    }

}
