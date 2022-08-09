import { galleryItems } from "./gallery-items.js";
// Change code below this line

const $gallery = document.querySelector(".gallery");

let galleryItemsArr = [...galleryItems].map((item) => {
  return `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img
        class=gallery__image
        src=${item.preview}
        alt=${item.description}
      />
    </a>
  </li>
  `;
});

$gallery.innerHTML = [...galleryItemsArr].join("");

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
