/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnInit, OnDestroy} from "@angular/core";
import {AbstractListComponent} from "./abstractListComponent";
import {Constants} from "../../Constants";

/*
 * @name List
 * @id 7f8606a0-eead-4728-8cd2-ed24705412c0
 */
export class TypeListComponent extends AbstractListComponent implements OnInit, OnDestroy {
    rContext: RenderingContext;
    constants: any;

    constructor() {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();
        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    isButtonLinkSet(): boolean {
        return (this.renderingContext.elements.viewAllLink && this.renderingContext.elements.viewAllLink.linkURL && this.renderingContext.elements.viewAllLink.linkURL.length > 0) ? true : false;
    }
}
