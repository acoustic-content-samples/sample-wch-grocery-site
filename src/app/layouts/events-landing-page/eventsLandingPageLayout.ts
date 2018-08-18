/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeEventsLandingPageComponent } from './../../components/events-landing-page/typeEventsLandingPageComponent';
import {UtilsService} from "../../common/utils/utils.service";

/**
 * @name eventsLandingPageLayout
 * @id events-landing-page-layout
 */
@LayoutComponent({
    selector: 'events-landing-page-layout'
})
@Component({
  selector: 'app-events-landing-page-layout-component',
  templateUrl: './eventsLandingPageLayout.html',
  styleUrls: ['./eventsLandingPageLayout.scss']
})
export class EventsLandingPageLayoutComponent extends TypeEventsLandingPageComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
