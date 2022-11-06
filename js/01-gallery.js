import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ref = {
  gallery: document.querySelector(".gallery"),
};

const imgsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
ref.gallery.insertAdjacentHTML("beforeend", imgsEl);

// console.log(imgsEl)

ref.gallery.addEventListener("click", gettintBigPhoto);
function gettintBigPhoto(event) {
  event.preventDefault();

  // відкриття модалки
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigPhoto = event.target.src;

  const instance = basicLightbox.create(`
    <img src="${bigPhoto}" width="800" height="600">
`);
  instance.show();

  // закриття
  ref.gallery.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

