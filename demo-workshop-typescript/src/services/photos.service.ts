import { BASE_URL } from "../constants";
import type { Photo } from "../interfaces/photo.interface";
import { APIService } from "./genericService";

export class PhotosService extends APIService<Photo> {
    constructor() {
        super(`${BASE_URL}/photos`);
    }
}