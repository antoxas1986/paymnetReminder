import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotificationService } from './notification.service';

@Injectable()
export class BankService {
  constructor(private storage: Storage, private notificationService: NotificationService) {

  }
  getBanks() {
    return this.storage.get('banks');
  }
  createBank(bank) {
    this.getBanks().then(data => {
      let banks = data == null ? [] : data;
      if (banks.length != 0) {
        bank.id = banks[banks.length - 1].id + 1;
      } else {
        bank.id = 1;
      }
      banks.push(bank);
      this.storage.set('banks', banks);
      this.notificationService.setNotifications(banks);
    });
  }
  removeBank(bank) {
    this.getBanks().then(data => {
      let banks = data;
      banks = banks.filter(item => {
        return item.id != bank.id;
      });
      this.storage.set('banks', banks);
      this.notificationService.setNotifications(banks);
    });
  }
  updateBank(bank) {
    this.getBanks().then(data => {
      let banks = data;
      banks = banks.filter(item => {
        return item.id != bank.id;
      });
      banks.push(bank);
      this.storage.set('banks', banks);
      this.notificationService.setNotifications(banks);
    });
  }
  deleteAllBanks(){
    this.storage.set('banks', []);
  }
}
