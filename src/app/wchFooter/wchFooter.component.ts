/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, Input, AfterViewInit} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";

declare var $: any;

@Component({
    selector: 'wch-footer',
    styleUrls: ['./wch-footer.scss'],
    templateUrl: './wch-footer.html',
})
export class WchFooterComponent implements AfterViewInit {
    rContext: RenderingContext;

    @Input()
    public set renderingContext(newRenderingContext: RenderingContext) {
        this.rContext = newRenderingContext;
    }

    constructor() {
    }

    ngAfterViewInit() {
        $('.modal-toggle').on('click', function (e) {
            e.preventDefault();
            $('.modal').toggleClass('is-visible');
        });
    }
}
