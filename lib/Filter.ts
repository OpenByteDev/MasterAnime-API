import queryString = require('query-string');

export enum Order {
    TITLE_ASC = 'title',
    TITLE_DESC = 'title_desc',
    SCORE_ASC = 'score',
    SCORE_DESC = 'score_desc'
}
export enum Type {
    TV = 0,
    Movie = 1,
    OVA = 2,
    Special = 3,
    ONA = 4
}
export class Filter {
    public page: number = 1;
    public order: Order = Order.SCORE_DESC;
    public type?: Type;

    constructor(filter: {order?: Order, page?: number, type?: Type}= {}) {
        Object.assign(this, filter);
    }
    public toQuery(): string {
        return queryString.stringify(this);
    }
}
