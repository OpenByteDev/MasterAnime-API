import { Filter, Type } from './Filter';
import { Id, Uri, UriHelper } from './UriHelper';

import axios from 'axios';
import jsonic = require('jsonic');

export interface AnimeBasic {
    title: string;
    slug: string;
}
export interface Anime extends AnimeBasic {
    id: number;
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
export interface AnimeInfo extends AnimeBasic {
    id: number;
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
    being_watched: TrendingAnime[];
    popular_today: TrendingAnime[];
}
export interface TrendingAnime extends AnimeBasic {
    total: number;
    poster: string;
}
export interface Release {
    anime: AnimeRelease;
    episode: string;
    created_at: string;
}
export interface AnimeRelease extends AnimeBasic {
    id: number;
    duration: number | null;
    age: string;
    poster: string;
    wallpaper: string | null;
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
export interface FilterResult extends AnimeBasic {
    id: number;
    status: number;
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
export interface EpisodeDetailed {
    anime: AnimeDetailed2;
    mirrors: Mirror[];
    auto_update: number[];
}
export interface AnimeDetailed2 {
    info: AnimeInfo2;
    poster: string;
    episodes: {
        current: CurrentEpisode2;
        next: Episode2 | null;
        prev: Episode2 | null;
    };
}
export interface Episode2 {
    id: number;
    episode: string;
}
export interface CurrentEpisode2 extends Episode2 {
    subbed: number;
    dubbed: number;
    type: number;
    title: string | null;
    duration: number | null;
    created_at: string;
    tvdb_id: number | null;
    description: string | null;
    aired: string | null;
    users: User[] | null;
    extra_viewers: number;
}
export interface User {
    id: number;
    name: string;
    last_time_seen: string;
    is_online: boolean;
    avatar: Avatar | null;
}
export interface Avatar {
    id: string;
    path: string;
    extension: string;
    file: string;
}
export interface AnimeInfo2 extends AnimeBasic {
    id: number;
    episode_length: number;
}
export interface Mirror {
    id: number;
    host_id: number;
    embed_id: string;
    quality: number;
    type: number;
    host: Host;
}
export interface Host {
    id: number;
    name: string;
    embed_prefix: string;
    embed_suffix: string | null;
}

export class MasterAnimeAPI {

    public static async getAnime(id: Id): Promise<Anime> {
        return (await axios.get(UriHelper.getAnime(id, false))).data;
    }
    public static async getAnimeDetailed(id: Id): Promise<AnimeDetailed> {
        return (await axios.get(UriHelper.getAnime(id, true))).data;
    }
    public static async getEpisode(anime_id: Id, episode: number): Promise<Episode> {
        return (await MasterAnimeAPI.getAnimeDetailed(anime_id)).episodes[episode];
    }
    public static async getEpisodeUrl(anime_id: Id, episode: number): Promise<Uri> {
        const { slug } = await MasterAnimeAPI.getAnime(anime_id);
        return UriHelper.getEpisode(slug, episode);
    }
    public static async getTrending(): Promise<Trending> {
        return (await axios.get(UriHelper.getTrending())).data;
    }
    public static async getReleases(): Promise<Release[]> {
        return (await axios.get(UriHelper.getReleases())).data;
    }
    public static async getFiltering(filter: Filter): Promise<FilterListing> {
        return (await axios.get(UriHelper.getFilter(filter))).data;
    }
    public static async getEpisodeDetailed(anime_slug: string, episode: number): Promise<EpisodeDetailed> {
        return MasterAnimeAPI.getEpisodeDetailedFromUrl(UriHelper.getEpisode(anime_slug, episode));
    }
    public static async getEpisodeDetailedFromUrl(url: string): Promise<EpisodeDetailed> {
        const { data: html } = await axios.get(url);
        const argsRegex = /<script[^>]*>\s*(?:(?:var|let|const)\s*)?args\s*=\s*({.*?})\s*(;\s*)?<\/script>/i;
        const argsData = argsRegex.exec(html);
        if (argsData === null || argsData.length < 2)
            return Promise.reject(new Error('Unable to find data'));
        const argsString = argsData[1];
        return jsonic(argsString) as EpisodeDetailed;
    }

}
