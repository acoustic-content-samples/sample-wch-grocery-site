/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component} from "@angular/core";
import {TypeSignUpComponent} from "./../../components/sign-up/typeSignUpComponent";
import {UtilsService} from "../../common/utils/utils.service";

/*
 * @name signUpLayout
 * @id sign-up-layout
 */
@LayoutComponent({
    selector: 'sign-up-layout'
})
@Component({
    selector: 'app-sign-up-layout-component',
    templateUrl: './signUpLayout.html',
    styleUrls: ['./signUpLayout.scss'],
    preserveWhitespaces: false
})
export class SignUpLayoutComponent extends TypeSignUpComponent {
    constructor(utilsService: UtilsService) {
        super(utilsService);
    }
}
