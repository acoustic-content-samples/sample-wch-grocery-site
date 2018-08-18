/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Category, Image, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/**
 * @name Recipe category page
 * @id 3c38285d-e8fd-499e-9f4e-3f40d7bec023
 */
export abstract class AbstractRecipeCategoryPageComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "acceptType": [
     *     "jpg",
     *     "jpeg",
     *     "png",
     *     "gif"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "815bc1bf-80d9-4bc7-9635-b98f319ed15e",
     *   "key": "banner",
     *   "label": "Banner",
     *   "required": true
     * }
     */
    @RenderingContextBinding('image.banner')
    readonly onBanner: Observable<Image>;

    /**
     * @see #onBanner
     */
    @RenderingContextBinding()
    readonly banner: Image;

    /**
     * {
     *   "elementType": "text",
     *   "key": "bannerText",
     *   "label": "Banner Text",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.bannerText')
    readonly onBannerText: Observable<string>;

    /**
     * @see #onBannerText
     */
    @RenderingContextBinding()
    readonly bannerText: string;

    /**
     * {
     *   "elementType": "category",
     *   "key": "category",
     *   "label": "Category",
     *   "restrictedParents": [
     *     "4659fda4-92bd-4172-9cc9-6fb763c07b8c"
     *   ]
     * }
     */
    @RenderingContextBinding('category.category')
    readonly onCategory: Observable<Category>;

    /**
     * @see #onCategory
     */
    @RenderingContextBinding()
    readonly category: Category;

    protected constructor() {
        super();
    }
}
