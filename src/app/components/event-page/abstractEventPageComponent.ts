/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Do not modify this file, it will be auto-generated.
 */
import {Image, Link, Location, RenderingContextBinding, AbstractRenderingComponent} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";

/*
 * @name Event page
 * @id d16d1ad4-3709-4092-85ea-a8875562475b
 */
export abstract class AbstractEventPageComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "elementType": "text",
     *   "key": "title",
     *   "label": "Title",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.title')
    readonly onTitle: Observable<string>;

    /*
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /*
     * {
     *   "acceptType": [
     *     "jpg",
     *     "jpeg",
     *     "png",
     *     "gif"
     *   ],
     *   "elementType": "image",
     *   "imageProfileId": "e220d67e-b774-4570-952b-60f1e57b793b",
     *   "key": "image",
     *   "label": "Image",
     *   "required": true
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
     *   "elementType": "datetime",
     *   "key": "startDate",
     *   "label": "Start date",
     *   "required": true
     * }
     */
    @RenderingContextBinding('datetime.startDate')
    readonly onStartDate: Observable<Date>;

    /*
     * @see #onStartDate
     */
    @RenderingContextBinding()
    readonly startDate: Date;

    /*
     * {
     *   "elementType": "datetime",
     *   "key": "endDate",
     *   "label": "End date"
     * }
     */
    @RenderingContextBinding('datetime.endDate')
    readonly onEndDate: Observable<Date>;

    /*
     * @see #onEndDate
     */
    @RenderingContextBinding()
    readonly endDate: Date;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "description",
     *   "label": "Description",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.description')
    readonly onDescription: Observable<string>;

    /*
     * @see #onDescription
     */
    @RenderingContextBinding()
    readonly description: string;

    /*
     * {
     *   "elementType": "formattedtext",
     *   "key": "address",
     *   "label": "Address",
     *   "required": true
     * }
     */
    @RenderingContextBinding('formattedtext.address')
    readonly onAddress: Observable<string>;

    /*
     * @see #onAddress
     */
    @RenderingContextBinding()
    readonly address: string;

    /*
     * {
     *   "elementType": "location",
     *   "key": "location",
     *   "label": "Location",
     *   "required": true
     * }
     */
    @RenderingContextBinding('location.location')
    readonly onLocation: Observable<Location>;

    /*
     * @see #onLocation
     */
    @RenderingContextBinding()
    readonly location: Location;

    /*
     * {
     *   "elementType": "link",
     *   "key": "link",
     *   "label": "Link"
     * }
     */
    @RenderingContextBinding('link.link')
    readonly onLink: Observable<Link>;

    /*
     * @see #onLink
     */
    @RenderingContextBinding()
    readonly link: Link;

    protected constructor() {
        super();
    }
}
