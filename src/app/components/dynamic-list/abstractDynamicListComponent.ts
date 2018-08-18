/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Category, Link, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Dynamic list
 * @id 367908ac-e711-4662-a531-91d3ada05508
 */
export abstract class AbstractDynamicListComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "heading",
     *   "label": "Heading"
     * }
     */
    @RenderingContextBinding('text.heading', '')
    readonly onHeading: Observable<string>;

    /*
     * @see #onHeading
     */
    @RenderingContextBinding()
    readonly heading: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "subheading",
     *   "label": "Subheading"
     * }
     */
    @RenderingContextBinding('text.subheading', '')
    readonly onSubheading: Observable<string>;

    /*
     * @see #onSubheading
     */
    @RenderingContextBinding()
    readonly subheading: string;

    /*
     * {
     *   "elementType": "link",
     *   "key": "viewAllLink",
     *   "label": "View all link"
     * }
     */
    @RenderingContextBinding('link.viewAllLink')
    readonly onViewAllLink: Observable<Link>;

    /*
     * @see #onViewAllLink
     */
    @RenderingContextBinding()
    readonly viewAllLink: Link;

    /*
     * {
     *   "elementType": "number",
     *   "fieldType": "integer",
     *   "key": "maximumNumberOfItems",
     *   "label": "Maximum number of items"
     * }
     */
    @RenderingContextBinding('number.maximumNumberOfItems', 0)
    readonly onMaximumNumberOfItems: Observable<number>;

    /*
     * @see #onMaximumNumberOfItems
     */
    @RenderingContextBinding()
    readonly maximumNumberOfItems: number;

    /*
     * {
     *   "elementType": "category",
     *   "key": "typeOfItemsToDisplay",
     *   "label": "Type of items to display",
     *   "required": true,
     *   "restrictedParents": [
     *     "68c0e0de-4893-4f55-9a16-800faf7c6baf"
     *   ]
     * }
     */
    @RenderingContextBinding('category.typeOfItemsToDisplay')
    readonly onTypeOfItemsToDisplay: Observable<Category>;

    /*
     * @see #onTypeOfItemsToDisplay
     */
    @RenderingContextBinding()
    readonly typeOfItemsToDisplay: Category;

    protected constructor() {
        super();
    }
}
