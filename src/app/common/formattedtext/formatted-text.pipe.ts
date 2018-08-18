/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeHtml, SafeStyle, SafeUrl} from "@angular/platform-browser";

@Pipe({
    name: 'formattedText'
})
export class FormattedTextPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {

    }

    /*
     Excluding Javascript for security reasons
     */
    transform(value: any, type?: any): SafeHtml | SafeStyle | SafeUrl | SafeUrl {
        type = type || 'html';
        //if(value) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Type: ${type} is not valid`);
        }
        // }

        //return '';

    }
}
