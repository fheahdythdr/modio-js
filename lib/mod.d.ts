import * as interfaces from './interfaces';
import { Modfile } from './modfile';
export declare class Mod {
    id: number;
    game_id: number;
    status: number;
    visible: number;
    submitter: interfaces.submitter;
    date_added: number;
    date_updated: number;
    date_live: number;
    maturity_option: number;
    community_options: number;
    monetisation_options: number;
    price: number;
    tax: number;
    logo: interfaces.logo;
    homepage_url: string;
    name: string;
    name_id: string;
    summary: string;
    description: string;
    description_plaintext: string;
    metadata_blob: string;
    mod_url: string;
    youtube_media: Array<string>;
    sketchfab_media: Array<string>;
    images: Array<object>;
    tags: Array<object>;
    popularity_rank_position: number;
    popularity_rank_total_mods: number;
    downloads_today: number;
    downloads_total: number;
    subscribers_total: number;
    ratings_total: number;
    ratings_positive: number;
    ratings_negative: number;
    ratings_display_text: string;
    constructor(tbl: any);
}
