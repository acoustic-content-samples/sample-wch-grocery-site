/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {TypeHomePageComponent} from "./../../components/home-page/typeHomePageComponent";

declare var $: any;

/**
 * @name homePageLayout
 * @id home-page-layout
 */
@LayoutComponent({
    selector: 'home-page-layout'
})
@Component({
    selector: 'app-home-page-layout-component',
    templateUrl: './homePageLayout.html',
    styleUrls: ['./homePageLayout.scss']
})
export class HomePageLayoutComponent extends TypeHomePageComponent implements OnInit, OnDestroy {
    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        $('#header').addClass('alt');
        $('#page-wrapper').addClass('alt');
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        $('#header').removeClass('reveal alt');
        $('#page-wrapper').removeClass('alt');
    }
}
