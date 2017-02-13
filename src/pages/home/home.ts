import { Component } from '@angular/core';
import { NavController, FabContainer, AlertController } from 'ionic-angular';
import { BankService } from '../../service/bank.service';
import { EditBankPage } from '../editBank/editBank';
import { CreateBankPage } from '../createBank/createBank';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BankService],
})
export class HomePage {

  banks: bank[];
  today: any;
  test: string;

  constructor(public navCtrl: NavController, private bankService: BankService, private alertCtrl: AlertController) {
    this.today = moment().format('MMM DD, YYYY');
    this.banks = [];
  }

  ionViewDidEnter() {
    this.bankService.getBanks().then(data => {
      this.banks = data;
    });
  }

  doRefresh(refresher) {
    this.bankService.getBanks().then(data => {
      this.banks = data;
      refresher.complete();
    });
  }

  makePayment(bank) {
    bank.balance = parseFloat((parseFloat(bank.balance) * parseFloat(bank.apr) / 100 / 12 + parseFloat(bank.balance) - parseFloat(bank.amount)).toFixed(2));
    bank.dueDate = moment(bank.dueDate).add(1, 'month').format();
    this.bankService.updateBank(bank);
    return bank;
  }

  getBackground(bank) {
    let days = moment.duration(moment(bank.dueDate).diff(moment())).asDays();
    if (days >= 10) return 'green'
    else if (days < 10 && days > 3) return 'orange'
    return 'red';
  }

  addBank(fab: FabContainer) {
    fab.close();
    this.navCtrl.push(CreateBankPage);
  }

  addTest(fab: FabContainer) {
    fab.close();
    this.test = "Test clicked";
  }

  editBank(bank) {
    this.navCtrl.push(EditBankPage, { bank: bank })
  }
  getNumberPayments(bank) {
    let counter = 0;
    if (this.isAmountEnough(bank)) {
      let balance = bank.balance;
      while (balance > 0) {
        let charge = balance * bank.apr / 100 / 12;
        balance = balance - bank.amount + charge;
        counter++;
      }
      return counter;
    }
    counter = 99
    return counter;
  }

  isAmountEnough(bank) {
    let balance = bank.balance;
    let charge = balance * bank.apr / 100 / 12;
    return (charge - bank.amount) < 0 ? true : false;
  }

}
interface bank {
  id: number;
  name: string;
  balance: number;
  apr: number;
  dueDate: string;
  amount: number;
}