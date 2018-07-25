import { Filter, UriHelper } from '../lib';

import { expect } from 'chai';
import 'mocha';

import validUrl = require('valid-url');

describe('UriHelper', () => {
    describe('#getAnime()', () => {
        const url = UriHelper.getAnime(1);
        it('should return a string', () => {
            expect(url).to.be.an('string');
        });
        it('should return a valid url', () => {
            expect(validUrl.isUri(url)).not.to.be.undefined;
        });
    });
    describe('#getEpisode()', () => {
        const url = UriHelper.getEpisode('2756-saiki-kusuo-no-ps-nan-2', 1);
        it('should return a string', () => {
            expect(url).to.be.an('string');
        });
        it('should return a valid url', () => {
            expect(validUrl.isUri(url)).not.to.be.undefined;
        });
    });
    describe('#getTrending()', () => {
        const url = UriHelper.getTrending();
        it('should return a string', () => {
            expect(url).to.be.an('string');
        });
        it('should return a valid url', () => {
            expect(validUrl.isUri(url)).not.to.be.undefined;
        });
    });
    describe('#getReleases()', () => {
        const url = UriHelper.getReleases();
        it('should return a string', () => {
            expect(url).to.be.an('string');
        });
        it('should return a valid url', () => {
            expect(validUrl.isUri(url)).not.to.be.undefined;
        });
    });
    describe('#getFilter()', () => {
        const url = UriHelper.getFilter(new Filter());
        it('should return a string', () => {
            expect(url).to.be.an('string');
        });
        it('should return a valid url', () => {
            expect(validUrl.isUri(url)).not.to.be.undefined;
        });
    });
});
