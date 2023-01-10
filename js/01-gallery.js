import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';
console.log(basicLightbox);

const galleryDivEl = document.querySelector('.gallery');

function createCard(galleryItems) {
  const newArray = galleryItems.map((item) => {
    const galleryItemEl = document.createElement('div');

    galleryItemEl.classList.add('gallery__item');
    galleryDivEl.append(galleryItemEl);

    const refImage = document.createElement('a');

    refImage.classList.add('gallery__link');
    refImage.href = item.original;
    galleryItemEl.append(refImage);

    const imageEl = document.createElement('img');

    imageEl.classList.add('gallery__image');
    imageEl.src = item.preview;
    imageEl.dataset.resource = item.original;
    imageEl.alt = item.description;
    refImage.append(imageEl);

    return item;
  });
}
createCard(galleryItems);

function handleClick(e) {
  //   console.log(e.target.nodeName);
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const clickImage = basicLightbox.create(
    `
    <div class="modal">
        <img 
        src="${e.target.dataset.resource}" 
        />
    </div>
`
  );
  clickImage.show();

  const modalEl = document.querySelector('.modal');
  //   console.log(modalEl);

  function modalCloseClick(e) {
    // console.log('modalCloseClick');
    clickImage.close();
    document.removeEventListener('keydown', modalCloseESCAPE);
  }
  modalEl.addEventListener('click', modalCloseClick);

  function modalCloseESCAPE(event) {
    // console.log('modalCloseESCAPE');
    // console.log(event.key);
    if (event.key === 'Escape') {
      clickImage.close();
      document.removeEventListener('keydown', modalCloseESCAPE);
    }
  }
  document.addEventListener('keydown', modalCloseESCAPE);
}

galleryDivEl.addEventListener('click', handleClick);
