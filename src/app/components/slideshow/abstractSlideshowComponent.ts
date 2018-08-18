/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {RenderingContext, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/**
 * @name Slideshow
 * @id 02a19c37-22b6-4543-a67b-a09c83f51864
 */
export abstract class AbstractSlideshowComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Slide",
     *   "key": "slides",
     *   "label": "Slides",
     *   "minimumValues": 0,
     *   "restrictTypes": [
     *     {
     *       "id": "2215421a-042e-424e-9544-c2993ca1b0d9"
     *     }
     *   ]
     * }
     */
    @RenderingContextBinding('references.slides', [])
    readonly onSlides: Observable<RenderingContext[]>;

    /**
     * @see #onSlides
     */
    @RenderingContextBinding()
    readonly slides: RenderingContext[];

    protected constructor() {
        super();
    }
}
