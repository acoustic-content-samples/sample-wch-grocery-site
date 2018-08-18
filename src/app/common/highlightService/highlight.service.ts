/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {Injectable} from "@angular/core";
import {asap} from "rxjs/scheduler/asap";
import * as $ from "jquery";

@Injectable()
export class HighlightService {
    private lastId: string;

    constructor() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }

    highlightElement(elementId: string): Promise<any> {
        if (this.lastId === elementId) {
            // return new Promise((res, rej) => res('No need to do anything.'));
            return this.toggleHighlight('add', elementId);
        }
        else {
            if (typeof(this.lastId) === 'string') {
                return this.toggleHighlight('remove', this.lastId).then(result => {
                    this.lastId = elementId;
                    return this.toggleHighlight('add', elementId);
                })
            }
            else {
                this.lastId = elementId;
                return this.toggleHighlight('add', elementId);
            }
        }
    }


    toggleHighlight(action: string, elemId: string) {
        return new Promise((res, rej) => {
            asap.schedule(() => {
                if (document.getElementById(elemId)) {
                    document.getElementById(elemId).classList[action]('highlight');
                }
                if (action === 'add')
                    $('html, body').animate({
                        scrollTop: $('#' + elemId).offset().top - 25
                    }, 'slow');
                res('Done ' + action);
            })
        })
    }

    receiveMessage(event: any) {
        // if (event.origin === Constants.SITE_MANAGER_URL) {
        if (event.data.action === 'highlight') {
            // console.log('HIGHLIGHT SERVICE, message received 2: ' + event.data.contentid);
            this.highlightElement(event.data.contentid);
        }
    }

}
