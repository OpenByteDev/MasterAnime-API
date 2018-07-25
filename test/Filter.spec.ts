import { Filter, Order } from '../lib';

import { expect } from 'chai';
import 'mocha';

describe('Filter', () => {
    describe('#toQuery()', () => {
        const filter = new Filter({
            order: Order.SCORE_DESC,
            page: 2
        });
        const query = filter.toQuery();
        it('should return a string', () => {
            expect(query).to.be.an('string');
        });
    });
});
