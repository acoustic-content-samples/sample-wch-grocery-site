/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../../Constants";
import {Http} from "@angular/http";

@Injectable()
export class ConfigServiceService {

    //cache config results
    public config: Map<string, any> = new Map();

    constructor(private http: Http) {

    }

    getConfig(name: string): Observable<any> {
        if (this.config.has(name)) {
            return Observable.of(this.config.get(name));
        }

        let possibleTenant = window.location.pathname.split('/')[1],
            baseUrl = possibleTenant.search(/\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}/) === 0 ? '/' + possibleTenant : '',
            apiUrl = (window.location.hostname === "localhost") ? Constants.apiUrl : `${window.location.protocol}//${window.location.hostname}/api${baseUrl}`;

        console.warn('config-service.service.ts: possible tenant is %o and base url is %o', possibleTenant, baseUrl);

        if (name === Constants.HEADER_CONFIG) {
            const headerId = '90d184ea-eb9c-4316-97a8-9d1ebc3029fc';
            return this.http.get(`${apiUrl}/delivery/v1/content/${headerId}`)
                .map(res => res.json()).do(res => this.config.set(name, res))
                .publishReplay(1)
                .refCount();
        }

        if (name === Constants.FOOTER_CONFIG) {
            const footerId = 'ae72d304-ad18-4bf3-b213-4a79c829e458';
            return this.http.get(`${apiUrl}/delivery/v1/content/${footerId}`)
                .map(res => res.json()).do(res => this.config.set(name, res))
                .publishReplay(1)
                .refCount();
        }

        let searchURL = `${apiUrl}/delivery/v1/search?q=name:%22${name}%22&fl=document:%5Bjson%5D`;
        return this.http.get(searchURL)
            .map((response) => {
                let res = response.json();
                if (res && res.numFound > 0) {
                    return response.json().documents.shift().document
                } else {
                    return {};
                }
            })
            .do((res) => {
                this.config.set(name, res);
            })
            .publishReplay(1)
    }
}
