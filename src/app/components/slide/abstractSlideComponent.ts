/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Image, Link, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Slide
 * @id 2215421a-042e-424e-9544-c2993ca1b0d9
 */
export abstract class AbstractSlideComponent extends AbstractRenderingComponent {

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
     *   "acceptType": [
     *     "jpg",
     *     "jpeg",
     *     "png",
     *     "gif"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "815bc1bf-80d9-4bc7-9635-b98f319ed15e",
     *   "key": "image",
     *   "label": "Image"
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
     *   "elementType": "link",
     *   "key": "actionLink",
     *   "label": "Action link"
     * }
     */
    @RenderingContextBinding('link.actionLink')
    readonly onActionLink: Observable<Link>;

    /*
     * @see #onActionLink
     */
    @RenderingContextBinding()
    readonly actionLink: Link;

    protected constructor() {
        super();
    }
}
