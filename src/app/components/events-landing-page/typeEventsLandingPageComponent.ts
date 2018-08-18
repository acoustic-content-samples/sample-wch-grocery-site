/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import {RenderingContext} from "ibm-wch-sdk-ng";
import {AbstractEventsLandingPageComponent} from "./abstractEventsLandingPageComponent";
import {Observable, Subject} from "rxjs";
import {Constants} from "../../Constants";
import {UtilsService} from "../../common/utils/utils.service";

const ROWS: number = 100;

/**
 * @name Events landing page
 * @id 1bd0a2e7-4b14-404a-a117-79147aee560b
 */
export class TypeEventsLandingPageComponent extends AbstractEventsLandingPageComponent {
    rContext: RenderingContext;
    constants: any;
    sortOrderStr: string;
    sortField: string;
    dateFilterStr: string;
    queryString: string;
    queryStringStream: Observable<string>;
    searchTerms: Subject<string>;

    readonly EVENT_START_DATE_KEY = "startDate";

    constructor(protected utilsService: UtilsService) {
        super();
        this.constants = Constants;
        this.searchTerms = new Subject<string>();
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            this.setFilterValues();
            this.queryString = this.generateQueryString(undefined);
            this.queryStringStream = this.searchTerms.startWith('')
                .debounceTime(300)
                .distinctUntilChanged()
                .map(searchTerm => this.generateQueryString(searchTerm));
        });

        this.safeSubscribe(this.queryStringStream, (queryString) => {
            this.queryString = queryString;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    search(searchTerm: string) {
        this.searchTerms.next(searchTerm);
    }

    setFilterValues() {
        this.sortField = this.EVENT_START_DATE_KEY;
        this.sortOrderStr = this.constants.OLDEST_FIRST;
        this.dateFilterStr = this.constants.FUTURE_DATES;
    }

    generateQueryString(searchTerm: string): string {
        let type = 'event page';
        let queryString = `fq=type:%22${type}%22&fq=classification:(content)&sort=lastModified%20desc&fl=document:%5Bjson%5D&rows=${ROWS}`;

        if (searchTerm) {
            let keyword = `name:*${searchTerm}*`;
            queryString += `&q=${encodeURIComponent(keyword)}`;
        }

        return queryString;
    }
}
