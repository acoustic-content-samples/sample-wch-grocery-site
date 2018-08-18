/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Link, RenderingContext, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name List
 * @id 7f8606a0-eead-4728-8cd2-ed24705412c0
 */
export abstract class AbstractListComponent extends AbstractRenderingComponent {

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
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Item",
     *   "key": "items",
     *   "label": "Items",
     *   "minimumValues": 1,
     *   "required": true,
     *   "restrictTypes": [
     *     {
     *       "id": "d16d1ad4-3709-4092-85ea-a8875562475b"
     *     },
     *     {
     *       "id": "d2b1abfc-c63e-4e6b-a098-03a629ee59d9"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('references.items')
    readonly onItems: Observable<RenderingContext[]>;

    /*
     * @see #onItems
     */
    @RenderingContextBinding()
    readonly items: RenderingContext[];

    protected constructor() {
        super();
    }
}
