/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {TestBed, inject} from "@angular/core/testing";
import {ConfigServiceService} from "./config-service.service";
import {HttpModule} from "@angular/http";

describe('ConfigServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [ConfigServiceService]
        });
    });

    it('should be created', inject([ConfigServiceService], (service: ConfigServiceService) => {
        expect(service).toBeTruthy();
    }));
});
