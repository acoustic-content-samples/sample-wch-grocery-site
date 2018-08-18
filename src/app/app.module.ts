/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {WchNgModule, PageComponent, WchLoggerFactory} from "ibm-wch-sdk-ng";
import {WchNgEditModule} from "ibm-wch-sdk-ng-edit";
import {LAYOUTS} from "./layouts";
import {environment} from "./environment/environment";
import {SiteCommonModule} from "./common/site.common.module";
import {HighlightService} from "./common/highlightService/highlight.service";
import {Ng2LoggerFactory} from "./common/Ng2LoggerFactory";
import {AppComponent} from "./app.component";
import {WchHeaderComponent} from "./wchHeader/wchHeader.component";
import {WchFooterComponent} from "./wchFooter/wchFooter.component";
import {WchBreadcrumbComponent} from "./wchBreadcrumb/wchBreadcrumb.component";
import {WchBannerComponent} from "./wchBanner/wchBanner.component";
import "script-loader!jquery";
import "script-loader!leaflet/dist/leaflet.js";
import "script-loader!../assets/js/jquery.dropotron.min.js";
import "script-loader!../assets/js/jquery.scrollex.min.js";
import "script-loader!../assets/js/skel.min.js";
import "script-loader!../assets/js/util.js";
import "script-loader!../assets/js/main.js";


const pageRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageComponent}
];

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './oob-spa/locales/', '.json');
}

@NgModule({
    imports: [
        RouterModule.forRoot(pageRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        WchNgModule.forRoot(environment),
        WchNgEditModule.forRoot(),
        SiteCommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    declarations: [
        AppComponent,
        WchHeaderComponent,
        WchFooterComponent,
        WchBreadcrumbComponent,
        WchBannerComponent,
        ...LAYOUTS
    ],
    providers: [
        {provide: WchLoggerFactory, useClass: Ng2LoggerFactory},
        HighlightService
    ],
    entryComponents: [
        ...LAYOUTS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    // cleue: add some fallback content
    /*	@SiteBootstrap()
     static defaultSite: Site = {
     id: 'default',
     pages: [{
     contentId: '908a3f7e-3c09-40d0-98a9-d30984f7f5ef',
     id: '41781ed4-2cc6-4320-b52a-aeb6a66f8f62',
     route: '/Home',
     decodedRoute: '/Home',
     name: 'Name',
     children: []
     }]
     }; */
}
