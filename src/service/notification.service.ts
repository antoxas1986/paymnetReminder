import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from 'ionic-native';
import { Platform } from 'ionic-angular';
import * as moment from 'moment';

@Injectable()
export class NotificationService {
    notifications: any;
    notificationID: number
    constructor(private storage: Storage, private platform: Platform) {
        this.notifications = [];
        this.notificationID = 1;
    }

    setNotifications(banks) {
        if (this.platform.is('cordova')) {
            banks.forEach(bank => {
                this.createNotificationsFromBank(bank);
            });
            console.log("Notifications to be scheduled: ", this.notifications);

            LocalNotifications.cancelAll().then(() => {
                LocalNotifications.schedule(this.notifications);
                this.notifications = [];
            });
        }
    }

    createNotificationsFromBank(bank) {
        bank.notifications.forEach((numberDays, index) => {
            let notificationTime = moment(bank.dueDate);
            notificationTime.subtract(numberDays, 'days');
            let t = new Date(notificationTime.format('YYYY-MM-DD'));

            let notification = {
                id: this.notificationID++,
                title: 'Payment reminder',
                text: bank.name + ' payment is due in ' + numberDays + ' days.',
                at: t,
                every: 'month'
            };
            this.notifications.push(notification);
        });
    }
}