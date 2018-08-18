/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeSlideComponent} from "./../../components/slide/typeSlideComponent";
import {UtilsService} from "../../common/utils/utils.service";

/**
 * @name slideLayout
 * @id slide-layout
 */
@LayoutComponent({
    selector: 'slide-layout'
})
@Component({
    selector: 'app-slide-layout-component',
    templateUrl: './slideLayout.html',
    styleUrls: ['./slideLayout.scss']
})
export class SlideLayoutComponent extends TypeSlideComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
