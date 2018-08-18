/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Category, Image, Link, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Recipe page
 * @id d2b1abfc-c63e-4e6b-a098-03a629ee59d9
 */
export abstract class AbstractRecipePageComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "title",
     *   "label": "Title",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.title')
    readonly onTitle: Observable<string>;

    /*
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /*
     * {
     *   "acceptType": [
     *     "jpg",
     *     "jpeg",
     *     "png",
     *     "gif"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "c98c7357-009e-46d6-bd25-cfd9313af9be",
     *   "key": "image",
     *   "label": "Image",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.image')
    readonly onImage: Observable<Image>;

    /*
     * @see #onImage
     */
    @RenderingContextBinding()
    readonly image: Image;

    /*
     * {
     *   "elementType": "text",
     *   "key": "author",
     *   "label": "Author",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.author')
    readonly onAuthor: Observable<string>;

    /*
     * @see #onAuthor
     */
    @RenderingContextBinding()
    readonly author: string;

    /*
     * {
     *   "elementType": "datetime",
     *   "key": "date",
     *   "label": "Date",
     *   "required": true
     * }
     */
    @RenderingContextBinding('datetime.date')
    readonly onDate: Observable<Date>;

    /*
     * @see #onDate
     */
    @RenderingContextBinding()
    readonly date: Date;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "description",
     *   "label": "Description",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.description')
    readonly onDescription: Observable<string>;

    /*
     * @see #onDescription
     */
    @RenderingContextBinding()
    readonly description: string;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "ingredients",
     *   "label": "Ingredients",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.ingredients')
    readonly onIngredients: Observable<string>;

    /*
     * @see #onIngredients
     */
    @RenderingContextBinding()
    readonly ingredients: string;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "method",
     *   "label": "Method",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.method')
    readonly onMethod: Observable<string>;

    /*
     * @see #onMethod
     */
    @RenderingContextBinding()
    readonly method: string;

    /*
     * {
     *   "elementType": "category",
     *   "key": "category",
     *   "label": "Category",
     *   "required": true,
     *   "restrictedParents": [
     *     "4659fda4-92bd-4172-9cc9-6fb763c07b8c"
     *   ]
     * }
     */
    @RenderingContextBinding('category.category')
    readonly onCategory: Observable<Category>;

    /*
     * @see #onCategory
     */
    @RenderingContextBinding()
    readonly category: Category;

    /*
     * {
     *   "elementType": "category",
     *   "key": "nutritionalFeatures",
     *   "label": "Nutritional Features",
     *   "required": true,
     *   "restrictedParents": [
     *     "32588fc6-c8e5-4d3c-b117-266b1f1e4546"
     *   ]
     * }
     */
    @RenderingContextBinding('category.nutritionalFeatures')
    readonly onNutritionalFeatures: Observable<Category>;

    /*
     * @see #onNutritionalFeatures
     */
    @RenderingContextBinding()
    readonly nutritionalFeatures: Category;

    /*
     * {
     *   "elementType": "link",
     *   "key": "link",
     *   "label": "Link"
     * }
     */
    @RenderingContextBinding('link.link')
    readonly onLink: Observable<Link>;

    /*
     * @see #onLink
     */
    @RenderingContextBinding()
    readonly link: Link;

    protected constructor() {
        super();
    }
}
