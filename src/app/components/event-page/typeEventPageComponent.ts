/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {AbstractEventPageComponent} from "./abstractEventPageComponent";
import {UtilsService} from "../../common/utils/utils.service";
import {Constants} from "../../Constants";

/*
 * @name Event page
 * @id d16d1ad4-3709-4092-85ea-a8875562475b
 */
export class TypeEventPageComponent extends AbstractEventPageComponent {
    rContext: RenderingContext;
    layoutMode: string;
    constants: any;

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            this.layoutMode = this.layoutMode || this.constants.DETAIL;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    navLink(): string {
        return this.utilsService.getNavLink(this.renderingContext, this.renderingContext.id);
    }

    getEventImageUrl(renditionKey: string): string {
        return this.utilsService.getImageUrl(this.rContext, 'image', renditionKey);
    }
}
