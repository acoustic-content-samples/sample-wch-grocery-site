/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {OnDestroy, OnInit} from "@angular/core";
import {AbstractRecipeCategoryPageComponent} from "./abstractRecipeCategoryPageComponent";
import {Observable, Subject} from "rxjs";
import {UtilsService} from "../../common/utils/utils.service";
import {Constants} from "../../Constants";

const ROWS: number = 100;

/**
 * @name Recipe category page
 * @id 3c38285d-e8fd-499e-9f4e-3f40d7bec023
 */
export class TypeRecipeCategoryPageComponent extends AbstractRecipeCategoryPageComponent implements OnInit, OnDestroy {
    rContext: RenderingContext;
    constants: any;
    queryString: string;
    queryStringStream: Observable<string>;
    searchTerms: Subject<string>;

    readonly CATEGORY_KEY = 'category';

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
        this.searchTerms = new Subject<string>();
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.layoutMode = this.layoutMode || this.constants.DETAIL;
            this.rContext = renderingContext;

            this.safeSubscribe(this.onCategory, (categoriesSelected) => {
                let category = this.utilsService.getFirstCategory(this.rContext, this.CATEGORY_KEY);
                this.queryString = this.generateQueryString(category, undefined);

                this.queryStringStream = this.searchTerms.startWith('')
                    .debounceTime(300)
                    .distinctUntilChanged()
                    .map(searchTerm => this.generateQueryString(category, searchTerm));
            });
        });

        this.safeSubscribe(this.queryStringStream, (queryString) => {
            this.queryString = queryString;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    navLink(): string {
        return this.utilsService.getNavLink(this.renderingContext, this.renderingContext.id);
    }

    search(searchTerm: string) {
        this.searchTerms.next(searchTerm);
    }

    generateQueryString(category: string, searchTerm: string): string {
        let type = this.constants.ITEM_TYPE_RECIPE_PAGE.toLowerCase();
        let queryString = `fq=type:%22${type}%22&fq=classification:(content)&fq=isManaged:(%22true%22)&sort=name%20asc&fl=document:%5Bjson%5D&rows=${ROWS}`;

        if (category && category.length) {
            queryString += `&fq=categoryLeaves:(%22${encodeURIComponent(category)}%22)`;
        }
        if (searchTerm && searchTerm.length) {
            let keyword = `name:*${searchTerm}*`;
            queryString += `&q=${encodeURIComponent(keyword)}`;
        }

        return queryString;
    }

    getRecipeCategoryImageUrl(renditionKey: string): string {
        return this.utilsService.getImageUrl(this.rContext, 'bannerImage', renditionKey);
    }
}
