import * as interfaces from './interfaces';
import { Modfile } from './modfile';

export class Mod {
    id: number;
    game_id: number;
    status: number;
    visible: number;
    submitter: interfaces.submitter
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
    constructor(tbl) {
        const submitter = tbl.submitted_by;
        this.id = tbl.id;
        this.game_id = tbl.game_id;
        this.status = tbl.status;
        this.visible = tbl.visible;
        this.submitter.id = submitter.id;
        this.submitter.name_id = submitter.name_id;
        this.submitter.username = submitter.username;
        this.submitter.date_online = submitter.date_online;
        this.submitter.date_joined = submitter.date_joined;
        this.submitter.avatar.filename = submitter.avatar.filename;
        this.submitter.avatar.original = submitter.avatar.original;
        this.submitter.avatar.thumb_50x50 = submitter.avatar.thumb_50x50;
        this.submitter.avatar.thumb_100x100 = submitter.avatar.thumb_100x100;
        this.submitter.timezone = submitter.timezone;
        this.submitter.language = submitter.language;
        this.submitter.profile_url = submitter.profile_url;
        this.date_added = tbl.date_added;
        this.date_updated = tbl.date_updated;
        this.date_live = tbl.date_live;
        this.maturity_option = tbl.maturity_option;
        this.community_options = tbl.community_options;
        this.monetisation_options = tbl.monetisation_options;
        this.price = tbl.price;
        this.tax = tbl.tax;
        this.logo.filename = tbl.logo.filename;
        this.logo.original = tbl.logo.original;
        this.logo.thumb_320x180 = tbl.logo.thumb_320x180;
        this.logo.thumb_640x360 = tbl.logo.thumb_640x360;
        this.logo.thumb_1280x720 = tbl.logo.thumb_1280x720;
        this.homepage_url = tbl.homepage_url;
        this.name = tbl.name;
        this.name_id = tbl.name_id;
        this.summary = tbl.summary;
        this.description = tbl.description;
        this.description_plaintext = tbl.description_plaintext;
        this.metadata_blob = tbl.metadata_blob;
        this.mod_url = tbl.profile_url;
        this.youtube_media = tbl.media.youtube;
        this.sketchfab_media = tbl.media.sketchfab;
        this.images = tbl.media.images;
        this.popularity_rank_position = tbl.modfile.popularity_rank_position;
        this.popularity_rank_total_mods = tbl.modfile.popularity_rank_total_mods;
        this.downloads_today = tbl.modfile.downloads_today;
        this.downloads_total = tbl.modfile.downloads_total;
        this.subscribers_total = tbl.modfile.subscribers_total;
        this.ratings_total = tbl.modfile.ratings_total;
        this.ratings_positive = tbl.modfile.ratings_positive;
        this.ratings_negative = tbl.modfile.ratings_negative;
        this.ratings_display_text = tbl.modfile.ratings_display_text;
    }
}
