import type { Album } from "../interfaces/album.interface";
import { AlbumsService } from "../services/albums.service";
import { renderProfileContent } from "../utils/html";

const albumService = new AlbumsService();

export async function showUserAlbums(usreId: number) {
    const albums = await albumService.getAlbumsByUser(usreId);

    const template = `
     <div class="albums-container">
            ${albums.map(album => generateSingleAlbum(album)).join("")}
        </div>
    `

    renderProfileContent(template);
}

function generateSingleAlbum(album: Album) {
    return `
    <div class="album-card" >
        <h3 class="album-title" > ${album.title} </h3>
            <a href = "#" class="photos-btn" data - id="${album.id}" >
            View Photos
            </a>
        <div class="photos-container" id = "photos-${album.id}" > </div>
    </div>
    `
}