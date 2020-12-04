import {QueryList} from '@angular/core';
import {itemsQueryListObservable} from '../items-query-list-observable';

describe('itemsQueryListObservable', () => {
    let queryList: QueryList<number>;

    beforeEach(() => {
        queryList = new QueryList<number>();
        queryList.reset([1, 2]);
    });

    it('emits current array on subscription', () => {
        let result: ReadonlyArray<number> | null = null;

        itemsQueryListObservable<number>(queryList).subscribe(data => {
            result = data;
        });

        expect<ReadonlyArray<number> | null>(result).toEqual([1, 2]);
    });

    it('emits new array on changes', () => {
        let result: ReadonlyArray<number> | null = null;

        itemsQueryListObservable<number>(queryList).subscribe(data => {
            result = data;
        });

        queryList.reset([1, 2, 3]);
        queryList.notifyOnChanges();

        expect<ReadonlyArray<number> | null>(result).toEqual([1, 2, 3]);
    });
});