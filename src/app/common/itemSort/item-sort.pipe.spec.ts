/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {ItemSortPipe} from "./item-sort.pipe";

describe('ItemSortPipe', () => {
    it('create an instance', () => {
        const pipe = new ItemSortPipe();
        expect(pipe).toBeTruthy();
    });
});
