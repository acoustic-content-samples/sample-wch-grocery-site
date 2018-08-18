/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-link',
    template: `
		<div *ngIf="isRouterLink(); then router else href"></div>
		<ng-template #router><a [routerLink]="href" [class]="classString">{{text}}</a></ng-template>
		<ng-template #href><a [href]="href" [class]="classString">{{text}}</a></ng-template>
	`
})
export class Link {

    @Input() href: string;
    @Input() classString: string;
    @Input() text: string;

    constructor() {
    }

    isRouterLink() {
        return !this.href.startsWith('http');
    }
}
