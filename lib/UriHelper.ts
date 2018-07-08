import { Filter } from './Filter';

const BASE_URL = 'https://www.masterani.me/';
const API_BASE_URL = BASE_URL + 'api/';

export type Uri = string;
export type Id = string | number;

export class UriHelper {
    public static getAnime(id: Id, detailed: boolean = true): Uri {
        return `${API_BASE_URL}anime/${id}/${detailed ? 'detailed' : ''}`;
    }
    public static getEpisode(anime_slug: string, episode: Id): Uri {
        return `${BASE_URL}anime/watch/${anime_slug}/${episode}`;
    }
    public static getReleases(): Uri {
        return `${API_BASE_URL}releases`;
    }
    public static getTrending(): Uri {
        return `${API_BASE_URL}anime/trending`;
    }
    public static getFilter(filter: Filter): Uri {
        return `${API_BASE_URL}anime/filter?${filter.toQuery()}`;
    }
}
