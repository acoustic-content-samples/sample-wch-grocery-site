/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnInit, OnDestroy} from "@angular/core";
import {AbstractSignUpComponent} from "./abstractSignUpComponent";
import {UtilsService} from "../../common/utils/utils.service";

/*
 * @name Sign up
 * @id ba37daaf-7e67-4825-b45e-307b1761d3d7
 */
export class TypeSignUpComponent extends AbstractSignUpComponent implements OnInit, OnDestroy {
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

    getBackgroundImageUrl(): string {
        return this.utilsService.getImageUrl(this.rContext, 'backgroundImage', 'large');
    }
}
