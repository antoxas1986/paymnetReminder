import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({ name: 'orderBy' })

export class orderBy implements PipeTransform {
    transform(obj: Array<any>, orderFields: string): Array<string> {
        var orderType = 'ASC';

        if (orderFields[0] === '-') {
            orderFields = orderFields.substring(1);
            orderType = 'DESC';
        }

        obj.sort(function (a, b) {
            if (orderType === 'ASC') {
                if (moment(a[orderFields]).isAfter(b[orderFields], 'day')) return -1;
                if (moment(a[orderFields]).isAfter(b[orderFields], 'day')) return 1;
                return 0;
            } else {
                if (moment(a[orderFields]).isAfter(b[orderFields], 'day')) return 1;
                if (moment(a[orderFields]).isAfter(b[orderFields], 'day')) return -1;
                return 0;
            }
        });

        return obj;
    }
}