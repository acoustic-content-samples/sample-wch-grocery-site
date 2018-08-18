/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeRecipePageComponent} from "./../../components/recipe-page/typeRecipePageComponent";
import {UtilsService} from "../../common/utils/utils.service";

/*
 * @name recipePageLayout
 * @id recipe-page-layout
 */
@LayoutComponent({
    selector: 'recipe-page-layout'
})
@Component({
    selector: 'app-recipe-page-layout-component',
    templateUrl: './recipePageLayout.html',
    styleUrls: ['./recipePageLayout.scss'],
    preserveWhitespaces: false
})
export class RecipePageLayoutComponent extends TypeRecipePageComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
