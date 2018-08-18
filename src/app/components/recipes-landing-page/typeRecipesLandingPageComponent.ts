/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnDestroy, OnInit} from "@angular/core";
import {AbstractRecipesLandingPageComponent} from "./abstractRecipesLandingPageComponent";
import {Constants} from "../../Constants";
import {UtilsService} from "../../common/utils/utils.service";

const ROWS: number = 100;

/**
 * @name Recipes landing page
 * @id ea6e3333-d6b7-43ec-be90-8a6784506eb5
 */
export class TypeRecipesLandingPageComponent extends AbstractRecipesLandingPageComponent implements OnInit, OnDestroy {
    rContext: RenderingContext;
    constants: any;
    queryString: string;

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            let type = this.constants.ITEM_TYPE_RECIPE_CATEGORY_PAGE.toLowerCase();
            this.queryString = `fq=type:%22${type}%22&fq=classification:(content)&sort=name%20asc&fl=document:%5Bjson%5D&rows=${ROWS}`;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
