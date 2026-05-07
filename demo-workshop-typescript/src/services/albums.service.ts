import { BASE_URL } from "../constants";
import type { Album } from "../interfaces/album.interface";
import { APIService } from "./genericService";

export class AlbumsService extends APIService<Album> {
    constructor() {
        super(`${BASE_URL}/albums`);
    }

    async getAlbumsByUser(userId: number): Promise<Album[]> {
        const response = await fetch(`${BASE_URL}/albums?userId=${userId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch user albums");
        }

        return await response.json();
    }
}