/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeEventPageComponent} from "./../../components/event-page/typeEventPageComponent";
import {UtilsService} from "../../common/utils/utils.service";

/*
 * @name eventPageLayout
 * @id event-page-layout
 */
@LayoutComponent({
    selector: 'event-page-layout'
})
@Component({
    selector: 'app-event-page-layout-component',
    templateUrl: './eventPageLayout.html',
    styleUrls: ['./eventPageLayout.scss'],
    preserveWhitespaces: false
})
export class EventPageLayoutComponent extends TypeEventPageComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
