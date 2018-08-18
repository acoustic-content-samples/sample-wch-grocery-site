/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {environment} from "../environment/environment";
import {WchNgModule} from "ibm-wch-sdk-ng";
/* utility pipes */
import {FormattedTextPipe} from "./formattedtext/formatted-text.pipe";
import {ItemSortPipe} from "./itemSort/item-sort.pipe";
import {ConfigServiceService} from "./configService/config-service.service";
import {DateFilterPipe} from "./dateFilter/date-filter.pipe";
import {UtilsService} from "./utils/utils.service";
import {Link} from "./link.component";

@NgModule({
    imports: [
        WchNgModule.forRoot(environment),
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        FormattedTextPipe,
        ItemSortPipe,
        DateFilterPipe,
        Link
    ],
    entryComponents: [],
    providers: [
        ConfigServiceService,
        UtilsService
    ],
    exports: [
        FormattedTextPipe,
        ItemSortPipe,
        DateFilterPipe,
        Link
    ]
})
export class SiteCommonModule {
}
