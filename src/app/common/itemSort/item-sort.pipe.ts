/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Pipe, PipeTransform} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";
import {Constants} from "../../Constants";

@Pipe({
    name: 'itemSort'
})
export class ItemSortPipe implements PipeTransform {

    transform(items: RenderingContext[], field: string, sortOrder: string, maxItemsToDisplay: number): any {
        let itemType = (items && items[0] && items[0].elements[field]) ? items[0].elements[field].elementType : "";
        //only sort if there is a valid field to sort on
        if (itemType) {
            items.sort((a: RenderingContext, b: RenderingContext) => {
                let itemA = a.elements[field].value;
                let itemB = b.elements[field].value;
                switch (itemType) {
                    case Constants.DATETIME: {
                        return this.sortGeneric(new Date(itemA), new Date(itemB));
                    }
                    default: {
                        return this.sortGeneric(itemA, itemB);
                    }
                }
            });

            /*
             reverse Date so the latest dates are first in the list
             */
            if (sortOrder === Constants.LATEST_FIRST || sortOrder === Constants.ALPHABETICAL_DESCENDING) {
                items.reverse();
            }

            if (maxItemsToDisplay) {
                items = items.slice(0, maxItemsToDisplay);
            }
        }

        return items;
    }

    sortGeneric(a: any, b: any) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
}
