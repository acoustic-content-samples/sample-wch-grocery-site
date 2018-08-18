/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, Input} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";

@Component({
    selector: 'wch-breadcrumb',
    styleUrls: ['./wch-breadcrumb.scss'],
    templateUrl: './wch-breadcrumb.html',
})
export class WchBreadcrumbComponent {
    rContext: RenderingContext;

    @Input()
    public set renderingContext(newRenderingContext: RenderingContext) {
        this.rContext = newRenderingContext;
    }

    constructor() {
    }

    getRouteURL(url: string): string {
        return decodeURI(url);
    }

    isClickableLink(isFirst: boolean, isLast: boolean): boolean {
        let isClickable = true;
        if ((isFirst && isLast) || isLast) {
            isClickable = false;
        }
        return isClickable;
    }
}
