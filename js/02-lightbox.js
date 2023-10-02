import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let lightbox;
const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
        loading="lazy"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item);
gallery.addEventListener("click", (evt) => evt.preventDefault())


lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: '250',
    alertErrorMessage: '（╯‵□′）╯︵┴─┴',
    overlay: true,
    overlayOpacity: 0.4,
    navText: ['←','→'],
 });





