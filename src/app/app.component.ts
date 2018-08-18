/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";
import {Observable} from "rxjs/Observable";
import {isNil} from "lodash";
import {NavigationEnd, Router} from "@angular/router";
import {HighlightService} from "./common/highlightService/highlight.service";
import {TranslateService} from "@ngx-translate/core";
import "rxjs/add/operator/filter";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app',
    styleUrls: ['app.scss'],
    templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
    @Output()
    onRenderingContext: Observable<RenderingContext>;

    constructor(private router: Router, private highlightService: HighlightService, private translate: TranslateService) {
        console.info(`Build date: ${version}`);
        console.info(`SDK version: ${sdkVersion}`);
    }

    ngOnInit() {
        this.translate.setDefaultLang('en');
        this.translate.use('en');

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    onActivate(aEvent: any) {
        const onRenderingContext = aEvent.onRenderingContext;
        if (!isNil(onRenderingContext)) {
            this.onRenderingContext = onRenderingContext;
        }
    }

    //This is the code in the parent page that contains SPA's iframe
    /*
     var button = document.querySelector('button');
     var iframe = document.querySelector('iframe');
     var inputBox = document.getElementById("message-box");
     var clickHandler = function(){
     //iframe.contentWindow.postMessage({"for":"user","data":"anything"},'http://localhost:4200');
     iframe.contentWindow.postMessage(inputBox.value,'http://localhost:4200');
     }
     button.addEventListener('click',clickHandler,false);
     */

}
