/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeAboutComponent} from "./../../components/about/typeAboutComponent";

/**
 * @name aboutLayout
 * @id about-layout
 */
@LayoutComponent({
    selector: 'about-layout'
})
@Component({
    selector: 'app-about-layout-component',
    templateUrl: './aboutLayout.html',
    styleUrls: ['./aboutLayout.scss']
})
export class AboutLayoutComponent extends TypeAboutComponent {
    constructor() {
        super();

    }
}
