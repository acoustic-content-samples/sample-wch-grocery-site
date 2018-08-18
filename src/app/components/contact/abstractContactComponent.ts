/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Location, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/**
 * @name Contact
 * @id a0827940-d345-4e9c-be0e-fa6bd7d8b63d
 */
export abstract class AbstractContactComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "formattedtext",
     *   "key": "address",
     *   "label": "Address"
     * }
     */
    @RenderingContextBinding('formattedtext.address', '')
    readonly onAddress: Observable<string>;

    /**
     * @see #onAddress
     */
    @RenderingContextBinding()
    readonly address: string;

    /**
     * {
     *   "elementType": "location",
     *   "key": "location",
     *   "label": "Location"
     * }
     */
    @RenderingContextBinding('location.location')
    readonly onLocation: Observable<Location>;

    /**
     * @see #onLocation
     */
    @RenderingContextBinding()
    readonly location: Location;

    /**
     * {
     *   "elementType": "text",
     *   "key": "phone",
     *   "label": "Phone"
     * }
     */
    @RenderingContextBinding('text.phone', '')
    readonly onPhone: Observable<string>;

    /**
     * @see #onPhone
     */
    @RenderingContextBinding()
    readonly phone: string;

    /**
     * {
     *   "elementType": "text",
     *   "key": "email",
     *   "label": "Email"
     * }
     */
    @RenderingContextBinding('text.email', '')
    readonly onEmail: Observable<string>;

    /**
     * @see #onEmail
     */
    @RenderingContextBinding()
    readonly email: string;

    /**
     * {
     *   "elementType": "formattedtext",
     *   "key": "openingHours",
     *   "label": "Opening hours"
     * }
     */
    @RenderingContextBinding('formattedtext.openingHours', '')
    readonly onOpeningHours: Observable<string>;

    /**
     * @see #onOpeningHours
     */
    @RenderingContextBinding()
    readonly openingHours: string;

    /**
     * {
     *   "elementType": "text",
     *   "key": "formHeading",
     *   "label": "Form heading"
     * }
     */
    @RenderingContextBinding('text.formHeading', '')
    readonly onFormHeading: Observable<string>;

    /**
     * @see #onFormHeading
     */
    @RenderingContextBinding()
    readonly formHeading: string;

    protected constructor() {
        super();
    }
}
