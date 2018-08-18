/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {TestBed, inject} from "@angular/core/testing";
import {HighlightService} from "./highlight.service";

describe('HighlightService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HighlightService]
        });
    });

    it('should be created', inject([HighlightService], (service: HighlightService) => {
        expect(service).toBeTruthy();
    }));
});
