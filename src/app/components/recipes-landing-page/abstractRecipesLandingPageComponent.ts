/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Image, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/**
 * @name Recipes landing page
 * @id ea6e3333-d6b7-43ec-be90-8a6784506eb5
 */
export abstract class AbstractRecipesLandingPageComponent extends AbstractRenderingComponent {

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
     *   "key": "bannerImage",
     *   "label": "Banner image"
     * }
     */
    @RenderingContextBinding('image.bannerImage')
    readonly onBannerImage: Observable<Image>;

    /**
     * @see #onBannerImage
     */
    @RenderingContextBinding()
    readonly bannerImage: Image;

    /**
     * {
     *   "elementType": "text",
     *   "key": "bannerText",
     *   "label": "Banner Text"
     * }
     */
    @RenderingContextBinding('text.bannerText', '')
    readonly onBannerText: Observable<string>;

    /**
     * @see #onBannerText
     */
    @RenderingContextBinding()
    readonly bannerText: string;

    protected constructor() {
        super();
    }
}
