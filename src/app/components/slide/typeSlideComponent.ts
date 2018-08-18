/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnInit, OnDestroy} from "@angular/core";
import {AbstractSlideComponent} from "./abstractSlideComponent";
import {UtilsService} from "../../common/utils/utils.service";

/**
 * @name Slide
 * @id 2215421a-042e-424e-9544-c2993ca1b0d9
 */
export class TypeSlideComponent extends AbstractSlideComponent implements OnInit, OnDestroy {
    rContext: RenderingContext;

    constructor(protected utilsService: UtilsService) {
        super();
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

    getSlideImageUrl(): string {
        return this.utilsService.getImageUrl(this.rContext, 'image', 'large');
    }
}
