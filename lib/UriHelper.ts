import queryString = require('query-string');

const BASE_URL = 'https://www.masterani.me/';
const API_BASE_URL = BASE_URL + 'api/';

export type Order = 'title' | 'title_desc' | 'score' | 'score_desc';
export type Uri = string;
export enum Type {
    TV = 0,
    Movie = 1,
    OVA = 2,
    Special = 3,
    ONA = 4
}
export type Id = string | number;
export class Filter {
    public page: number = 1;
    public order: Order = 'score_desc';
    public type?: Type;

    constructor (filter?:Filter) {
        if (filter !== null && typeof filter === 'object')
            Object.assign(this, filter);
    }
}

export class UriHelper {
    static getAnime (id: Id, detailed: boolean = true): Uri {
        return `${API_BASE_URL}anime/${id}/${detailed ? 'detailed' : ''}`;
    }
    static getEpisode (anime_slug: string, episode: Id): Uri {
        return `${BASE_URL}anime/watch/${anime_slug}/${episode}`;
    }
    static getReleases (): Uri {
        return `${API_BASE_URL}releases`;
    }
    static getTrending (): Uri {
        return `${API_BASE_URL}anime/trending`;
    }
    static getFilter (filter:Filter): Uri {
        return `${API_BASE_URL}anime/filter?${queryString.stringify(filter)}`;
    }
}