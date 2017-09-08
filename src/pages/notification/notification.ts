import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { NotificationService } from '../../service/notification.service';
//import * as moment from 'moment';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  notifications: any[] = [];
  constructor(public navCtrl: NavController, public platform: Platform, private notificationService: NotificationService) {
    this.notifications = [];
    this.getNotifications();

  }
  ionViewDidLoad() { }

  ionViewDidEnter() {
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getNotificationsFromStorage().then(data => {
      this.notifications = [];
      if (data != null) {
        this.notifications = data;
        this.notifications.forEach(element => {
          element.data = JSON.parse(element.data)
        });
      }

      // let notification = {
      //   id: 1,
      //   title: 'Payment reminder',
      //   text: 'Test payment is due in 10 days.',
      //   at: new Date,
      //   data: { bankName: 'Test', numberOfDays: 10, isActive: true },
      //   every: 'month'
      // };
      // this.notifications.push(notification);
      // let notification2 = {
      //   id: 2,
      //   title: 'Payment reminder',
      //   text: 'Test payment is due in 3 days.',
      //   at: new Date,
      //   data: { bankName: 'Test', numberOfDays: 3, isActive: true },
      //   every: 'month'
      // };
      // this.notifications.push(notification2);

    });
  }

  updateNotifications() {
    let notificationToSave = this.notifications.filter(item => {
      return item.data.isActive
    })
    let test = JSON.parse(JSON.stringify(notificationToSave));
    if (this.platform.is("cordova")) {
      this.notificationService.updateNotifications(test);
      this.notificationService.updateNotificationStorage(this.notifications);
      console.log(this.notifications);
    }
  }

  doRefresh(e) {
    this.getNotifications();
    e.complete();
  }

}
