import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ref = {
  gallery: document.querySelector(".gallery"),
};

const imgsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"

         />
        </a>`
        )
  .join("");
ref.gallery.insertAdjacentHTML("beforeend", imgsEl);

let lightbox = new SimpleLightbox('.gallery a', 
{captionsData: 'alt', captionDelay:'250'});
