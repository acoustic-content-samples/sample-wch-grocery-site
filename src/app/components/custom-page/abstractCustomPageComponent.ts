/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Image, RenderingContext, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Custom page
 * @id f35a691d-7ca7-4106-9c80-e1e617f68e12
 */
export abstract class AbstractCustomPageComponent extends AbstractRenderingComponent {

    /*
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

    /*
     * @see #onBannerImage
     */
    @RenderingContextBinding()
    readonly bannerImage: Image;

    /*
     * {
     *   "elementType": "text",
     *   "key": "bannerText",
     *   "label": "Banner text"
     * }
     */
    @RenderingContextBinding('text.bannerText', '')
    readonly onBannerText: Observable<string>;

    /*
     * @see #onBannerText
     */
    @RenderingContextBinding()
    readonly bannerText: string;

    /*
     * {
     *   "elementType": "reference",
     *   "key": "pageContent",
     *   "label": "Page content",
     *   "restrictTypes": [
     *     {
     *       "id": "ef333692-773c-4fcf-999c-5ca16359e03d"
     *     },
     *     {
     *       "id": "a0827940-d345-4e9c-be0e-fa6bd7d8b63d"
     *     },
     *     {
     *       "id": "367908ac-e711-4662-a531-91d3ada05508"
     *     },
     *     {
     *       "id": "7f8606a0-eead-4728-8cd2-ed24705412c0"
     *     },
     *     {
     *       "id": "02a19c37-22b6-4543-a67b-a09c83f51864"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('reference.pageContent')
    readonly onPageContent: Observable<RenderingContext>;

    /*
     * @see #onPageContent
     */
    @RenderingContextBinding()
    readonly pageContent: RenderingContext;

    protected constructor() {
        super();
    }
}
