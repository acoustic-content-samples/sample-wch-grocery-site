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
 * @name Events landing page
 * @id 1bd0a2e7-4b14-404a-a117-79147aee560b
 */
export abstract class AbstractEventsLandingPageComponent extends AbstractRenderingComponent {

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
     *   "label": "Banner text"
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
