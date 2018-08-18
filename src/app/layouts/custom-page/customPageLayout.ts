/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeCustomPageComponent} from "./../../components/custom-page/typeCustomPageComponent";

/*
 * @name customPageLayout
 * @id custom-page-layout
 */
@LayoutComponent({
    selector: 'custom-page-layout'
})
@Component({
    selector: 'app-custom-page-layout-component',
    templateUrl: './customPageLayout.html',
    styleUrls: ['./customPageLayout.scss'],
    preserveWhitespaces: false
})
export class CustomPageLayoutComponent extends TypeCustomPageComponent {
    constructor() {
        super();
    }
}
