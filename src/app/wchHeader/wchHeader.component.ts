/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Component, Input, OnDestroy, AfterViewInit, ViewChildren, QueryList} from "@angular/core";
import {RenderingContext} from "ibm-wch-sdk-ng";
import {Subscription} from "rxjs/Subscription";

declare var $: any;
declare var skel: any;
declare var dropotron: any;

@Component({
    selector: 'wch-header',
    styleUrls: ['./wch-header.scss'],
    templateUrl: './wch-header.html'
})
export class WchHeaderComponent implements AfterViewInit, OnDestroy {
    rc: RenderingContext;
    navigationMenuSub: Subscription;

    @Input()
    public set renderingContext(aValue: RenderingContext) {
        this.rc = aValue;
    }

    @ViewChildren("navigationMenu") navigationMenu: QueryList<any>;

    ngAfterViewInit() {
        this.navigationMenuSub = this.navigationMenu.changes.subscribe((r) => {
            // console.log("### navigationMenu.changes", r);
            this.loadNavigationMenu();
            this.loadResponsiveMenu();
        });
    }

    ngOnDestroy() {
        this.navigationMenuSub.unsubscribe();
    }

    loadNavigationMenu() {
        $('#nav > ul').dropotron({
            expandMode: (skel.vars.mobile ? 'click' : 'hover')
        });
    }

    loadResponsiveMenu() {
        let $body = $('body');

        // Navigation Button.
        $(
            `<div id="navButton">
				<a href="#navPanel" class="toggle"></a>
			</div>`
        )
        .appendTo($body);

        // Navigation Panel.
        $(
            `<div id="navPanel">
				<h1 class="logo"><a href="index.html">Freshery<i class="fa fa-leaf" aria-hidden="true"></i></a></h1>
				<nav>
					${$('#nav').navList()}
				</nav>
			</div>`
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
    }

    getRouteURL(url: string): string {
        return decodeURI(url);
    }

    showChildPages(page: any): boolean {
        return ((page.name.toLowerCase() != "events") && (page.children.length > 0));
    }
}
