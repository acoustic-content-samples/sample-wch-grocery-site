/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {AbstractRecipePageComponent} from "./abstractRecipePageComponent";
import {UtilsService} from "../../common/utils/utils.service";
import {Constants} from "../../Constants";

const ROWS: number = 4;

/*
 * @name Recipe page
 * @id d2b1abfc-c63e-4e6b-a098-03a629ee59d9
 */
export class TypeRecipePageComponent extends AbstractRecipePageComponent {
    rContext: RenderingContext;
    layoutMode: string;
    constants: any;
    suggestedRecipesQuery: string;

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            this.layoutMode = this.layoutMode || this.constants.DETAIL;

            if (this.layoutMode === this.constants.DETAIL) {
                this.setSuggestedRecipesQuery(renderingContext);
            }
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    navLink(): string {
        return this.utilsService.getNavLink(this.renderingContext, this.renderingContext.id);
    }

    getRecipeImageUrl(renditionKey: string): string {
        return this.utilsService.getImageUrl(this.rContext, 'image', renditionKey);
    }

    setSuggestedRecipesQuery(renderingContext: any) {
        let type = this.constants.ITEM_TYPE_RECIPE_PAGE.toLowerCase();
        let query = `q=*:*%20AND%20type:%22recipe%20page%22`;

        if (renderingContext) {
            if (renderingContext.category) {
                let categoryLeaves = [];

                for (const taxonomy in renderingContext.category) {
                    let categoryPaths = renderingContext.category[taxonomy].categoryPaths;
                    if (categoryPaths) {
                        categoryLeaves = categoryLeaves.concat(categoryPaths.map(this.getLastString));
                    }
                }

                if (categoryLeaves.length) {
                    let encodedCategoryLeaves = categoryLeaves.map(this.encodeStringValue).join("%20OR%20");
                    query += `%20OR%20categoryLeaves:(${encodedCategoryLeaves})`;
                }
            }

            if (renderingContext.tags && renderingContext.tags.length) {
                let encodedTags = renderingContext.tags.map(this.encodeStringValue).join("%20OR%20");
                query += `%20OR%20tags:(${encodedTags})`;
            }
        }

        this.suggestedRecipesQuery = `${query}&fq=classification:(content)&fq=NOT%20id:%22${this.renderingContext.id}%22&sort=score%20desc,%20lastModified%20desc&fl=document:%5Bjson%5D&rows=${ROWS}`;
    }

    encodeStringValue(stringValue: string): string {
        return `%22${encodeURIComponent(stringValue)}%22`;
    }

    getLastString(array: string[]): string {
        let lastString = "";
        if (array && array.length) {
            lastString = array[array.length - 1];
        }
        return lastString;
    }
}
