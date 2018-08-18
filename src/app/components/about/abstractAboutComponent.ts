/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/**
 * @name About
 * @id ef333692-773c-4fcf-999c-5ca16359e03d
 */
export abstract class AbstractAboutComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "text",
     *   "key": "heading",
     *   "label": "Heading"
     * }
     */
    @RenderingContextBinding('text.heading', '')
    readonly onHeading: Observable<string>;

    /**
     * @see #onHeading
     */
    @RenderingContextBinding()
    readonly heading: string;

    /**
     * {
     *   "elementType": "formattedtext",
     *   "key": "body",
     *   "label": "Body"
     * }
     */
    @RenderingContextBinding('formattedtext.body', '')
    readonly onBody: Observable<string>;

    /**
     * @see #onBody
     */
    @RenderingContextBinding()
    readonly body: string;

    protected constructor() {
        super();
    }
}
