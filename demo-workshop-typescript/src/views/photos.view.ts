import type { Photo } from "../interfaces/photo.interface";
import { PhotosService } from "../services/photos.service";
import { renderProfileContent } from "../utils/html";
import { showUserAlbums } from "./albums.view";

const photosService = new PhotosService();

export async function showAlbumPhotos(albumId: number, userId: number) {
    const photos = await photosService.getPhotosByAlbum(albumId);

    const template = `
        <a href="#" class="back-btn-photos">
            Back to Albums
        </a>

        <div class="photos-grid">
            ${photos.map(photo => generateSinglePhoto(photo)).join('')}
        </div>
    `

    renderProfileContent(template);
    attachPhotoEvent(userId);
}

function generateSinglePhoto(photo: Photo) {
    return `
        <div class="photo-card">
            <img src="${photo.thumbnailUrl}" alt="${photo.title}" class="photo-image"/>
            <div class="photo-content" >
                <p class="photo-title" >${photo.title}</p>
            </div>
        </div>
    `
}

function attachPhotoEvent(userId: number) {
    const button = document.querySelector('.back-btn-photos');

    button?.addEventListener('click', (e) => {
        e.preventDefault();

        history.pushState({}, '', `/users/${userId}`);

        showUserAlbums(userId);
    })
}