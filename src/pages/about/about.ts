import { Component } from '@angular/core';

import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import * as moment from 'moment';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;
  alarm:any;
  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
    this.notifyTime = moment(new Date()).format();

    this.chosenHours = new Date().getHours();
    this.chosenMinutes = new Date().getMinutes();
   

    this.days = [
      { title: 'Monday', dayCode: 1, checked: false },
      { title: 'Tuesday', dayCode: 2, checked: false },
      { title: 'Wednesday', dayCode: 3, checked: false },
      { title: 'Thursday', dayCode: 4, checked: false },
      { title: 'Friday', dayCode: 5, checked: false },
      { title: 'Saturday', dayCode: 6, checked: false },
      { title: 'Sunday', dayCode: 0, checked: false }
    ];
  }
  ionViewDidLoad() {

  }

  timeChange(time) {
    this.chosenHours = time.hour.value;
    this.chosenMinutes = time.minute.value;
  }

  addNotifications() {
    
    let firstNotificationTime = new Date();
    
    firstNotificationTime.setMinutes(firstNotificationTime.getMinutes() + 1);
    
    this.alarm = firstNotificationTime;

    let notification = {
      id: 1,
      title: 'Hey!',
      text: 'You just got notified :)',
      at: firstNotificationTime,
      every: 'week'
    };

    this.notifications.push(notification);

    console.log("Notifications to be scheduled: ", this.notifications);

    if (this.platform.is('cordova')) {

      

      // Cancel any existing notifications
      LocalNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        LocalNotifications.schedule(this.notifications);

        this.notifications = [];

        let alert = this.alertCtrl.create({
          title: 'Notifications set',
          buttons: ['Ok']
        });

        alert.present();

      });

    }
  }

  cancelAll() {
    LocalNotifications.cancelAll();

    let alert = this.alertCtrl.create({
      title: 'Notifications cancelled',
      buttons: ['Ok']
    });

    alert.present();
  }

}
