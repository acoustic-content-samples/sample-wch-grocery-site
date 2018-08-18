/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeDynamicListComponent} from "./../../components/dynamic-list/typeDynamicListComponent";
import {UtilsService} from "../../common/utils/utils.service";

/*
 * @name dynamicListLayout
 * @id dynamic-list-layout
 */
@LayoutComponent({
    selector: 'dynamic-list-layout'
})
@Component({
    selector: 'app-dynamic-list-layout-component',
    templateUrl: './dynamicListLayout.html',
    styleUrls: ['./dynamicListLayout.scss'],
    preserveWhitespaces: false
})
export class DynamicListLayoutComponent extends TypeDynamicListComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
