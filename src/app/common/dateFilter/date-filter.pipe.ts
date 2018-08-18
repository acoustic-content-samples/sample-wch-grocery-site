/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Pipe, PipeTransform} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";
import {Constants} from "../../Constants";

@Pipe({
    name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

    transform(items: RenderingContext[], field?: string, dateFilter?: string): any {
        let res = [];
        dateFilter = dateFilter || '';
        const currentDate = new Date();
        if (dateFilter === Constants.FUTURE_DATES && items) {

            return items.filter((item) => {
                if (item.elements[field]) {
                    let date = item.elements[field].value;
                    if (date && item.elements[field].elementType === 'datetime') {
                        date = new Date(date);
                        return (date > currentDate);
                    }
                }
            });
        } else if (dateFilter === Constants.LAST_7_DAYS) {

            return this._calculatePastDate(items, field, 7);

        } else if (dateFilter === Constants.LAST_30_DAYS) {

            return this._calculatePastDate(items, field, 30);

        }

        //if dateFilter was not set return everything
        return items;
    }

    _calculatePastDate(items: RenderingContext[], field: string, days: number) {
        let currentDate = new Date();
        let pastDate = new Date(currentDate.getTime() - (days * 24 * 60 * 60 * 1000));
        let res = items.filter((item) => {
            if (item.elements[field]) {
                let date = item.elements[field].value;
                if (date && item.elements[field].elementType === 'datetime') {
                    date = new Date(date);
                    return (pastDate < date && date < currentDate);
                }
            } else {
                //Default to returning the item if it does not contain the field to sort
                return true;
            }
        })
        return res;
    }
}
