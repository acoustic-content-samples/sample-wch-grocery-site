/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {enableProdMode} from "@angular/core";
import {platformBrowser} from "@angular/platform-browser";
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
import {AppModuleNgFactory} from "./aot/app/app.module.ngfactory";

if (ENV === 'production') {
    enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
