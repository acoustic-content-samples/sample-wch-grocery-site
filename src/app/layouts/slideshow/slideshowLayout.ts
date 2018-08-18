/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component, AfterViewInit, ViewChildren, QueryList, OnDestroy} from "@angular/core";
import {TypeSlideshowComponent} from "./../../components/slideshow/typeSlideshowComponent";
import {Subscription} from "rxjs/Subscription";

declare var $: any;

/**
 * @name slideshowLayout
 * @id slideshow-layout
 */
@LayoutComponent({
    selector: 'slideshow-layout'
})
@Component({
    selector: 'app-slideshow-layout-component',
    templateUrl: './slideshowLayout.html',
    styleUrls: ['./slideshowLayout.scss']
})
export class SlideshowLayoutComponent extends TypeSlideshowComponent implements AfterViewInit, OnDestroy {
    @ViewChildren("slideshow") slideshow: QueryList<any>;

    slideShowSub: Subscription;

    constructor() {
        super();
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();

        this.stickifyNavigationMenu();
        this.loadSlideshow();
        this.slideShowSub = this.slideshow.changes.subscribe((r) => {
            // console.log("### slideshow.changes", r);
            this.loadSlideshow();
        });
    }

    ngOnDestroy() {
        this.slideShowSub.unsubscribe();
    }

    loadSlideshow() {
        let $slideshow = $('.slideshow');

        $slideshow._slider({
            // Indicators (= the clickable dots at the bottom).
            indicators: true,

            // Transition speed (in ms)
            // For timing purposes only. It *must* match the transition speed of "#banner > article".
            speed: 1500,

            // Transition delay (in ms)
            delay: 5000,

            // Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
            parallax: 0.25
        });

        setTimeout(() => {
            $slideshow.removeClass('is-loading');
        }, 0);
    }

    stickifyNavigationMenu() {
        let $window = $(window);
        let $header = $('#header');
        let $slideshow = $('.slideshow');

        // $window.on('resize', function() { $window.trigger('scroll'); });
        $slideshow.scrollex({
            mode: 'bottom',
            terminate: function() {
                $header.removeClass('alt');
            },
            enter: function() {
                $header.addClass('alt');
            },
            leave: function() {
                $header.removeClass('alt').addClass('reveal');
            }
        });
    }
}
