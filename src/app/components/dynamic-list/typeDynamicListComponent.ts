/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnInit, OnDestroy} from "@angular/core";
import {AbstractDynamicListComponent} from "./abstractDynamicListComponent";
import {Constants} from "../../Constants";
import {UtilsService} from "../../common/utils/utils.service";

const ROWS: number = 100;

/*
 * @name Dynamic list
 * @id 367908ac-e711-4662-a531-91d3ada05508
 */
export class TypeDynamicListComponent extends AbstractDynamicListComponent implements OnInit, OnDestroy {
    rContext: RenderingContext;
    constants: any;
    sortOrderStr: string;
    sortField: string;
    dateFilterStr: string;
    maxItemsToDisplay: number;
    queryString: string;

    readonly ITEM_TYPE_KEY = "typeOfItemsToDisplay";
    readonly MAX_ITEM_KEY = "maximumNumberOfItems";
    readonly EVENT_START_DATE_KEY = "startDate";

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();
        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            let type = this.utilsService.getFirstCategory(renderingContext, this.ITEM_TYPE_KEY);
            this.setFilterValues(type);
            this.queryString = `q=type:%22${type}%22&fq=classification:(content)&sort=name%20asc&fl=document:%5Bjson%5D&rows=${ROWS}`;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    isButtonLinkSet(): boolean {
        return (this.renderingContext.elements.viewAllLink && this.renderingContext.elements.viewAllLink.linkURL && this.renderingContext.elements.viewAllLink.linkURL.length > 0) ? true : false;
    }

    setFilterValues(type: any) {
        if (type === this.constants.ITEM_TYPE_EVENT_PAGE) {
            this.sortField = this.EVENT_START_DATE_KEY;
            this.sortOrderStr = this.constants.OLDEST_FIRST;
            this.dateFilterStr = this.constants.FUTURE_DATES;
        }
        this.maxItemsToDisplay = (this.rContext.number && this.rContext.number[this.MAX_ITEM_KEY]) ? this.rContext.number[this.MAX_ITEM_KEY] : null;
    }
}
