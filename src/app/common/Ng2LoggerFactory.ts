/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Log} from "ng2-logger";
import {LoggerFactory} from "ibm-wch-sdk-ng";

export class Ng2LoggerFactory implements LoggerFactory {
    create = (name: string) => {
        return Log.create(name);
    }

    constructor() {
    }
}
