import { BASE_URL } from "../constants";
import type { Photo } from "../interfaces/photo.interface";
import { APIService } from "./genericService";

export class PhotosService extends APIService<Photo> {
    constructor() {
        super(`${BASE_URL}/photos`);
    }

    async getPhotosByAlbum(albumId: number): Promise<Photo[]> {
        const response = await fetch(`${BASE_URL}/photos?albumId=${albumId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch post comments");
        }

        return await response.json();
    }
}