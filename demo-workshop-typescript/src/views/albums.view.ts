import type { Album } from "../interfaces/album.interface";
import { AlbumsService } from "../services/albums.service";
import { renderProfileContent } from "../utils/html";
import { showAlbumPhotos } from "./photos.view";

const albumService = new AlbumsService();

export async function showUserAlbums(usreId: number) {
    const albums = await albumService.getAlbumsByUser(usreId);

    const template = `
     <div class="albums-container">
            ${albums.map(album => generateSingleAlbum(album)).join("")}
        </div>
    `

    renderProfileContent(template);
    attachUserEvents(usreId)
}

function generateSingleAlbum(album: Album) {
    return `
    <div class="album-card" >
        <h3 class="album-title" > ${album.title} </h3>
            <a href = "#" class="photos-btn" data-id="${album.id}" >
            View Photos
            </a>
        <div class="photos-container" id = "photos-${album.id}" > </div>
    </div>
    `
}

function attachUserEvents(userId: number) {
    const buttons = document.querySelectorAll('.photos-btn');

    buttons.forEach(button => button?.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const albumId = Number(target.dataset.id);

        history.pushState({}, '', `/users/${userId}/album/${albumId}/photos`);

        showAlbumPhotos(albumId, userId);
    }));
}