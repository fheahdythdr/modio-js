import {get as httpGet} from 'https';
import {createWriteStream as write} from 'fs';

import * as interfaces from './interfaces'

export class Modfile {
    filesize: number;
    id: number;
    mod_id: number;
    date_added: number;
    date_scanned: number;
    virus_status: number;
    virus_positive: number;
    virustotal_hash: string;
    md5: string;
    filename: string;
    version: string;
    changelog: string;
    metadata_blob: string;
    binary_url: string;
    date_expires: number;
    platforms: Array<interfaces.platform>;
    constructor(tbl: any) {
        this.id = tbl.id;
        this.mod_id = tbl.mod_id;
        this.date_added = tbl.date_added;
        this.date_scanned = tbl.date_scanned;
        this.virus_status = tbl.virus_status;
        this.virus_positive = tbl.virus_positive;
        this.virustotal_hash = tbl.virustotal_hash;
        this.filesize = tbl.filesize;
        this.md5 = tbl.filehash.md5;
        this.filename = tbl.filename;
        this.version = tbl.version;
        this.changelog = tbl.changelog;
        this.metadata_blob = tbl.metadata_blob;
        this.binary_url = tbl.download.binary_url;
        this.date_expires = tbl.download.date_expires;
        if (tbl.platforms.length > 0) {
            this.platforms = [];
            for (const platform of tbl.platforms) {
                for (let i = 0; i < tbl.platforms.length; i++) {
                    const tplat = this.platforms[i];
                    const tblplat = platform;
                    tplat.label = tblplat.label;
                    tplat.moderated = tblplat.moderated;
                    tplat.platform = tblplat.platform;
                }
            }
        }
    }
    async download(path: string) {
        let pipe;
        httpGet(this.binary_url, (incoming) => {
            pipe = incoming.pipe(write(path))
        })
        return new Promise((resolve, reject) => {
            pipe.on('finish', () => resolve);
            pipe.on('error', () => reject);
        })
    }
}
