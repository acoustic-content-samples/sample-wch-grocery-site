/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Image, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Sign up
 * @id ba37daaf-7e67-4825-b45e-307b1761d3d7
 */
export abstract class AbstractSignUpComponent extends AbstractRenderingComponent {

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
     *   "key": "backgroundImage",
     *   "label": "Background image"
     * }
     */
    @RenderingContextBinding('image.backgroundImage')
    readonly onBackgroundImage: Observable<Image>;

    /*
     * @see #onBackgroundImage
     */
    @RenderingContextBinding()
    readonly backgroundImage: Image;

    /*
     * {
     *   "elementType": "text",
     *   "key": "headline",
     *   "label": "Headline"
     * }
     */
    @RenderingContextBinding('text.headline', '')
    readonly onHeadline: Observable<string>;

    /*
     * @see #onHeadline
     */
    @RenderingContextBinding()
    readonly headline: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "textInputPlaceholder",
     *   "label": "Text input placeholder"
     * }
     */
    @RenderingContextBinding('text.textInputPlaceholder', '')
    readonly onTextInputPlaceholder: Observable<string>;

    /*
     * @see #onTextInputPlaceholder
     */
    @RenderingContextBinding()
    readonly textInputPlaceholder: string;

    /*
     * {
     *   "elementType": "text",
     *   "key": "actionLabel",
     *   "label": "Action label"
     * }
     */
    @RenderingContextBinding('text.actionLabel', '')
    readonly onActionLabel: Observable<string>;

    /*
     * @see #onActionLabel
     */
    @RenderingContextBinding()
    readonly actionLabel: string;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "confirmationMessage",
     *   "label": "Confirmation message"
     * }
     */
    @RenderingContextBinding('formattedtext.confirmationMessage', '')
    readonly onConfirmationMessage: Observable<string>;

    /*
     * @see #onConfirmationMessage
     */
    @RenderingContextBinding()
    readonly confirmationMessage: string;

    protected constructor() {
        super();
    }
}
