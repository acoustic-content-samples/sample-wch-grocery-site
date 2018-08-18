/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {RenderingContextBinding, AbstractRenderingComponent, RenderingContext} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";
import {UtilsService} from "../common/utils/utils.service";


@Component({
    selector: 'wch-banner',
    styleUrls: ['./wch-banner.scss'],
    templateUrl: './wch-banner.html',
})
export class WchBannerComponent extends AbstractRenderingComponent implements OnInit, OnDestroy {
    @RenderingContextBinding('text.bannerText', '')
    readonly onBannerText: Observable<string>;

    @RenderingContextBinding()
    readonly bannerText: string;

    bannerImageUrl: string;

    constructor(private utilsService: UtilsService) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.bannerImageUrl = this.utilsService.getImageUrl(renderingContext, 'bannerImage', 'large');
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
