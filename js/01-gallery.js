import { galleryItems } from "./gallery-items.js";

// Change code below this line
const $gallery = document.querySelector(".gallery");

let galleryItemsArr = [...galleryItems].map((item) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class=gallery__image
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>
  `;
});

$gallery.innerHTML = [...galleryItemsArr].join("");

$gallery.addEventListener("click", imageClick);

function imageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  // additional
  $gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
  $gallery.addEventListener("keydown", sliderEscClose);

  function sliderEscClose(e) {
    if (e.code === "Escape") {
      instance.close();
      $gallery.removeEventListener("keydown", sliderEscClose);
    }
  }
}
