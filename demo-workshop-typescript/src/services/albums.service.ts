import { BASE_URL } from "../constants";
import type { Album } from "../interfaces/album.interface";
import { APIService } from "./genericService";

export class AlbumsService extends APIService<Album> {
    constructor() {
        super(`${BASE_URL}/albums`);
    }
}