import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { getImagesMarkup } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const galleryItems = document.querySelector('.gallery');

const iziToastOptions = {
  backgroundColor: 'red',
  messageColor: 'white',
  messageSize: '14',
  position: 'topRight',
  timeout: 3000,
};

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  galleryItems.innerHTML = '';
  const searchQuery = e.target.elements.query.value.trim();

  if (searchQuery === '') {
    iziToast.show({
      ...iziToastOptions,
      message: 'Fill out the search form!',
    });

    return;
  }

  loader.classList.remove('is-hidden');
  getImages(searchQuery)
    .then(data => {
      if (data.totalHits === 0) {
        iziToast.show({
          ...iziToastOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(data.hits);
      }

      e.target.reset();
    })
    .catch(err => console.log(err))
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}

function renderImages(images) {
  const markup = getImagesMarkup(images);
  galleryItems.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
