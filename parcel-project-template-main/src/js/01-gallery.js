// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
function createGalleryItems(items){
   const markup = items
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      `;
    })
    .join("");
    return markup;
}

gallery.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems)); 


    let Lightbox = new SimpleLightbox('.gallery a',{
        captions: true,
        captionsData: "alt",
        captionDelay: 250,

    });

    console.log(galleryItems);