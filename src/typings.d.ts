/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SystemJS module definition
 */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}


declare var $: any;
declare var Foundation: any;

declare var version: string;
declare var sdkVersion: string;
declare var ENV: string;

interface GlobalEnvironment {
    $;
    Foundation;
    version;
    sdkVersion;
    ENV;
}