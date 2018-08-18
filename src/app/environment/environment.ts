/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Constants} from "../Constants";

let possibleTenant = window.location.pathname.split('/')[1],
    baseUrl = possibleTenant.search(/\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}/) === 0 ? '/' + possibleTenant : '';

console.warn('environment.ts: possible tenant is %o and base url is %o', possibleTenant, baseUrl);

export const environment = {
    production: (ENV === 'production') ? true : false,
    apiUrl: (window.location.hostname === "localhost") ? new URL(Constants['apiUrl']) : new URL(`${window.location.protocol}//${window.location.hostname}/api${baseUrl}`),
    deliveryUrl: (window.location.hostname === "localhost") ? new URL(Constants['deliveryUrl']) : new URL(`${window.location.protocol}//${window.location.hostname}${baseUrl}`),
    httpOptions: {
        pollTime: 999999,
        retries: 5
    }
};
