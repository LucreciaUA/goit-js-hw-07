import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let instance;
const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
        loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item);

gallery.addEventListener("click", imageClick);

function imageClick(evt) {
    noLink(evt)
    
    if (evt.target.classList.contains('gallery__image')) {
        const source = evt.target.dataset.source;
    
    const discribe = evt.target.getAttribute('alt');
    
    
    instance = basicLightbox.create(`<img src="${source}" alt="${discribe}">`);

    instance.show();

    document.addEventListener("keydown", escape)
    }

    
}


function noLink(evt) {
     evt.preventDefault();
}

const escape = (evt) => {
           if (evt.key !== 'Escape') {
        return;
    }
    instance.close();
        } 



