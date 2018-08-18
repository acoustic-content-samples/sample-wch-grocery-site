/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {LayoutComponent} from "ibm-wch-sdk-ng";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {TypeContactComponent} from "./../../components/contact/typeContactComponent";

declare var L: any;

/**
 * @name contactLayout
 * @id contact-layout
 */
@LayoutComponent({
    selector: 'contact-layout'
})
@Component({
    selector: 'app-contact-layout-component',
    templateUrl: './contactLayout.html',
    styleUrls: ['./contactLayout.scss']
})
export class ContactLayoutComponent extends TypeContactComponent implements OnInit, OnDestroy {
    storeMap: any;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onLocation, (location) => {
            this.loadStoreMap(location.latitude, location.longitude, this.address)
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    loadStoreMap(latitude: number, longitude: number, address: any) {
        let markerIcon = L.icon({
            iconUrl: require('./images/marker-icon.png'),
            iconRetinaUrl: require('./images/marker-icon-2x.png'),
            shadowUrl: require('./images/marker-shadow.png'),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        });

        if (!this.storeMap) {
            this.storeMap = L.map('store-map');

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.storeMap);
        }

        this.storeMap.setView([latitude, longitude], 18);
        L.marker([latitude, longitude], {icon: markerIcon})
            .bindPopup(address)
            .addTo(this.storeMap);
    }
}
