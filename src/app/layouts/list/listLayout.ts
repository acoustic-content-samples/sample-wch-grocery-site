/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeListComponent} from "./../../components/list/typeListComponent";

/*
 * @name listLayout
 * @id list-layout
 */
@LayoutComponent({
    selector: 'list-layout'
})
@Component({
    selector: 'app-list-layout-component',
    templateUrl: './listLayout.html',
    styleUrls: ['./listLayout.scss'],
    preserveWhitespaces: false
})
export class ListLayoutComponent extends TypeListComponent {
    constructor() {
        super();
    }
}
