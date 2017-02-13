import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BankService {
  constructor(private storage: Storage) {

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
    });
  }
  removeBank(bank) {
    this.getBanks().then(data => {
      let banks = data;
      banks = banks.filter(item => {
        return item.id != bank.id;
      });
      this.storage.set('banks', banks);
    });
  }
  updateBank(bank) {
    this.getBanks().then(data => {
      let banks = data;
      console.log(banks);
      console.log(bank);
      banks = banks.filter(item => {
        return item.id != bank.id;
      });
      banks.push(bank);
      this.storage.set('banks', banks);
    });
  }
}
