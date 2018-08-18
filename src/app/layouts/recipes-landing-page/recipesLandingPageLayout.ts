/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeRecipesLandingPageComponent} from "./../../components/recipes-landing-page/typeRecipesLandingPageComponent";
import {UtilsService} from "../../common/utils/utils.service";

/**
 * @name recipesLandingPageLayout
 * @id recipes-landing-page-layout
 */
@LayoutComponent({
    selector: 'recipes-landing-page-layout'
})
@Component({
    selector: 'app-recipes-landing-page-layout-component',
    templateUrl: './recipesLandingPageLayout.html',
    styleUrls: ['./recipesLandingPageLayout.scss']
})
export class RecipesLandingPageLayoutComponent extends TypeRecipesLandingPageComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
