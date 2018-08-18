/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {DateFilterPipe} from "./date-filter.pipe";

describe('DateFilterPipe', () => {
    it('create an instance', () => {
        const pipe = new DateFilterPipe();
        expect(pipe).toBeTruthy();
    });
});
