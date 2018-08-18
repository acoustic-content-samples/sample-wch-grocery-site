/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormattedTextPipe} from "./formatted-text.pipe";

describe('FormattedTextPipe', () => {
    let component: FormattedTextPipe;
    let fixture: ComponentFixture<FormattedTextPipe>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormattedTextPipe]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormattedTextPipe);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //TODO testing for directive
    xit('create an instance', () => {
        expect(component).toBeTruthy();
    });
});
