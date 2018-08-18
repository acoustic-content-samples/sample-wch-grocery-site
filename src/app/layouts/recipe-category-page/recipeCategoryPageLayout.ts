/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeRecipeCategoryPageComponent} from "./../../components/recipe-category-page/typeRecipeCategoryPageComponent";
import {UtilsService} from "../../common/utils/utils.service";

/**
 * @name recipeCategoryPageLayout
 * @id recipe-category-page-layout
 */
@LayoutComponent({
    selector: 'recipe-category-page-layout'
})
@Component({
    selector: 'app-recipe-category-page-layout-component',
    templateUrl: './recipeCategoryPageLayout.html',
    styleUrls: ['./recipeCategoryPageLayout.scss']
})
export class RecipeCategoryPageLayoutComponent extends TypeRecipeCategoryPageComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
