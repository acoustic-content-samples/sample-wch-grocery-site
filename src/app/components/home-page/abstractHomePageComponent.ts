/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {RenderingContext, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Home page
 * @id 5f0f7d24-df1b-4467-b70b-dfdb17002f44
 */
export abstract class AbstractHomePageComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "allowMultipleValues": false,
     *   "elementType": "reference",
     *   "key": "heroSlideshow",
     *   "label": "Hero slideshow",
     *   "restrictTypes": [
     *     {
     *       "id": "02a19c37-22b6-4543-a67b-a09c83f51864"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.heroSlideshow')
    readonly onHeroSlideshow: Observable<RenderingContext>;

    /*
     * @see #onHeroSlideshow
     */
    @RenderingContextBinding()
    readonly heroSlideshow: RenderingContext;

    /*
     * {
     *   "elementType": "reference",
     *   "key": "featuredListOne",
     *   "label": "Featured list one",
     *   "restrictTypes": [
     *     {
     *       "id": "367908ac-e711-4662-a531-91d3ada05508"
     *     },
     *     {
     *       "id": "7f8606a0-eead-4728-8cd2-ed24705412c0"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.featuredListOne')
    readonly onFeaturedListOne: Observable<RenderingContext>;

    /*
     * @see #onFeaturedListOne
     */
    @RenderingContextBinding()
    readonly featuredListOne: RenderingContext;

    /*
     * {
     *   "elementType": "reference",
     *   "key": "featuredListTwo",
     *   "label": "Featured list two",
     *   "restrictTypes": [
     *     {
     *       "id": "367908ac-e711-4662-a531-91d3ada05508"
     *     },
     *     {
     *       "id": "7f8606a0-eead-4728-8cd2-ed24705412c0"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.featuredListTwo')
    readonly onFeaturedListTwo: Observable<RenderingContext>;

    /*
     * @see #onFeaturedListTwo
     */
    @RenderingContextBinding()
    readonly featuredListTwo: RenderingContext;

    /*
     * {
     *   "elementType": "reference",
     *   "key": "newsletterSection",
     *   "label": "Newsletter section",
     *   "restrictTypes": [
     *     {
     *       "id": "ba37daaf-7e67-4825-b45e-307b1761d3d7"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.newsletterSection')
    readonly onNewsletterSection: Observable<RenderingContext>;

    /*
     * @see #onNewsletterSection
     */
    @RenderingContextBinding()
    readonly newsletterSection: RenderingContext;

    protected constructor() {
        super();
    }
}
