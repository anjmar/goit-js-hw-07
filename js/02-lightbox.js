import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUlEl = document.querySelector('.gallery');

function createCard(galleryItems) {
  const newArray = galleryItems.map((item) => {
    const refImage = document.createElement('a');

    refImage.classList.add('gallery__item');
    refImage.href = item.original;
    galleryUlEl.append(refImage);

    const imageEl = document.createElement('img');

    imageEl.classList.add('gallery__image');
    imageEl.src = item.preview;
    imageEl.alt = item.description;
    refImage.append(imageEl);

    return refImage;
  });
  galleryUlEl.append(...newArray);
}
createCard(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
