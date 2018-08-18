/**
 * Copyright IBM Corporation 2018.
 * LICENSE: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
export class Constants {
    //static readonly DOMAIN_NAME = '';
    //static readonly CONTENT_HUB_ID = '';

    static readonly PROTOCOL = window.location.protocol;
    static readonly apiUrl = `${Constants.PROTOCOL}//${Constants['DOMAIN_NAME']}/api/${Constants['CONTENT_HUB_ID']}`;
    static readonly deliveryUrl = `${Constants.PROTOCOL}//${Constants['DOMAIN_NAME']}/${Constants['CONTENT_HUB_ID']}`;

    static readonly FOOTER_CONFIG = 'footerConfig';
    static readonly HEADER_CONFIG = 'headerConfig';

    /* Layout modes */
    static readonly DETAIL = 'default';
    static readonly SUMMARY = 'Summary';

    /* Sort order */
    static readonly ALPHABETICAL_ASCENDING = 'Alphabetical ascending';
    static readonly ALPHABETICAL_DESCENDING = 'Alphabetical descending';
    static readonly LATEST_FIRST = 'By date descending';
    static readonly OLDEST_FIRST = 'By date ascending';

    /* Filter date */
    static readonly FUTURE_DATES = 'Future dates (Events)';
    static readonly LAST_30_DAYS = 'Published last 30 days';
    static readonly LAST_7_DAYS = 'Published last 7 days';

    /* Item types */
    static readonly ITEM_TYPE_EVENT_PAGE = "Event page";
    static readonly ITEM_TYPE_RECIPE_PAGE = "Recipe page";
    static readonly ITEM_TYPE_RECIPE_CATEGORY_PAGE = "Recipe category page";

    /* Sort field type */
    static readonly DATETIME = 'datetime';

    /* The page that sends web message to SPA's iframe */
    static readonly SITE_MANAGER_URL = 'http://localhost:8000';
}
