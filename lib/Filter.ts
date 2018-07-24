import queryString = require('query-string');

export type Order = 'title' | 'title_desc' | 'score' | 'score_desc';
export enum Type {
    TV = 0,
    Movie = 1,
    OVA = 2,
    Special = 3,
    ONA = 4
}
export class Filter {
    public page: number = 1;
    public order?: Order;
    public type?: Type;

    constructor(filter: {order?: Order, page?: number, type?: Type}) {
        Object.assign(this, filter);
    }
    public toQuery() {
        return queryString.stringify(this);
    }
}
