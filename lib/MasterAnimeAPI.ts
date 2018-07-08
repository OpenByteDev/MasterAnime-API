import { UriHelper, Filter, Type, Uri, Id } from './UriHelper';
import axios from 'axios';

export interface Anime {
    id: number;
    title: string;
    slug: string;
    status: number;
    type: Type;
    score: number;
    episode_count: number | null;
    started_airing_date: string;
    finished_airing_date: string | null;
}
export interface AnimeDetailed {
    info: AnimeInfo;
    synonyms: Synonym[];
    genres: Genre[];
    poster: string;
    franchise_count: number;
    wallpapers: Wallpaper[];
    episodes: Episode[];
}
export interface AnimeInfo {
    id: number;
    title: string;
    slug: string;
    synopsis: string;
    status: number;
    type: Type;
    score: number;
    users_watching: number;
    users_completed: number;
    users_on_hold: number;
    users_planned: number;
    users_dropped: number;
    episode_count: number | null;
    started_airing_date: string;
    finished_airing_date: string | null;
    youtube_trailer_id: string | null;
    age_rating: string;
    episode_length: number;
    tvdb_id: number | null;
    tvdb_season_id: number | null;
    tvdb_episode: null;
    wallpaper_id: string | null;
    wallpaper_offset: number;
    franchise_count: number;
}
export interface Synonym {
    title: string;
    type: number;
}
export interface Genre {
    id: number;
    name: string;
}
export interface Wallpaper {
    id: string;
    file: string;
}
export interface Episode {
    info: EpisodeInfo;
    thumbnail: string;
}
export interface EpisodeInfo {
    id: number;
    anime_id: number;
    episode: string;
    title: string | null;
    tvdb_id: number | null;
    aired: string | null;
    type: number;
    duration: number | null;
    description: string | null;
}
export interface Trending {
    being_watched: Anime[];
    popular_today: Anime[];
}
export interface Release {
    anime: {
        id: number;
        title: string;
        slug: string;
        duration: number | null;
        age: string;
        poster: string;
        wallpaper: string | null;
    }
    episode: string;
    created_at: string;
}
export interface FilterListing {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    from: number;
    to: number;
    data: FilterResult[];
}
export interface FilterResult {
    id: number;
    title: string;
    slug: string;
    status: string;
    score: number;
    episode_count: number | null;
    started_airing_date: string;
    finished_airing_date: string | null;
    genres: Genre[];
    poster: PosterInfo;
}
export interface PosterInfo {
    id: string;
    path: string;
    extension: string;
    file: string;
}

export class MasterAnimeAPI {

    public static async getAnime (id: Id): Promise<Anime> {
        return (await axios.get(UriHelper.getAnime(id, false))).data;
    }
    public static async getAnimeDetailed (id: Id): Promise<AnimeDetailed> {
        return (await axios.get(UriHelper.getAnime(id, true))).data;
    }
    public static async getEpisode (anime_id: Id, episode: number): Promise<Episode> {
        return (await MasterAnimeAPI.getAnimeDetailed(anime_id)).episodes[episode];
    }
    public static async getEpisodeUrl (anime_id: Id, episode: number): Promise<Uri> {
        const slug = (await MasterAnimeAPI.getAnime(anime_id)).slug;
        return UriHelper.getEpisode(slug, episode);
    }
    public static async getTrending (): Promise<Trending> {
        return (await axios.get(UriHelper.getTrending())).data;
    }
    public static async getReleases (): Promise<Release[]> {
        return (await axios.get(UriHelper.getReleases())).data;
    }
    public static async getFiltering (filter: Filter): Promise<FilterListing> {
        return (await axios.get(UriHelper.getFilter(filter))).data;
    }

}