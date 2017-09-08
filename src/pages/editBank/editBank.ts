import { Component } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-editBank',
    templateUrl: 'editBank.html',
    providers: [BankService]
})
export class EditBankPage {

    bank: any;

    constructor(public navCtrl: NavController, private navParams: NavParams, private bankService: BankService, public alertCtrl: AlertController) {
        this.bank = this.navParams.get('bank');
    }
    
    removeBank(bank) {
        let confirm = this.alertCtrl.create({
            title: 'Sure to DELETE?',
            message: 'Do you want to delete this payment?',
            buttons: [
              {
                text: 'Cancel',
                handler: () => {
                }
              },
              {
                text: 'Agree',
                handler: () => {
                    this.bankService.removeBank(bank);
                    this.navCtrl.pop()
                }
              }
            ]
          });
          confirm.present();
    }
    updateBank(bank) {
        this.bankService.updateBank(bank);
        this.navCtrl.pop()
    }

}
