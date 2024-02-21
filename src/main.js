import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { getImagesMarkup } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const galleryItems = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('#loadMore');

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

let searchQuery;
let page;
let maxPage;
const quantity = 15;

form.addEventListener('submit', onFormSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();
  galleryItems.innerHTML = '';
  searchQuery = e.target.elements.query.value.trim();
  page = 1;
  hideLoadBtn();
  showLoader();

  if (searchQuery === '') {
    showMessage('Fill out the search form!');
    hideLoader();
    return;
  }

  try {
    const data = await getImages(searchQuery, page, quantity);
    maxPage = Math.ceil(data.total / quantity);

    if (data.totalHits === 0) {
      showMessage('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderImages(data.hits);
      checkBtnVisibleStatus();
    }
  } catch (err) {
    showMessage(err.message);
    maxPage = 0;
    galleryItems.innerHTML = '';
  }

  hideLoader();
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  showLoader();
  hideLoadBtn();
  try {
    const data = await getImages(searchQuery, page, quantity);
    hideLoader();
    checkBtnVisibleStatus();
    renderImages(data.hits);
    scroll();
  } catch (err) {
    showMessage(err.message);
  }
}

function renderImages(images) {
  const markup = getImagesMarkup(images);
  galleryItems.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

function showLoadBtn() {
  btnLoadMore.classList.remove('is-hidden');
}

function hideLoadBtn() {
  btnLoadMore.classList.add('is-hidden');
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
    showMessage("We're sorry, but you've reached the end of search results.", {
      backgroundColor: 'lightblue',
      messageColor: 'black',
    });
  } else {
    showLoadBtn();
  }
}

function showMessage(message, options = {}) {
  const iziToastOptions = {
    backgroundColor: 'red',
    messageColor: 'white',
    messageSize: '14',
    position: 'topRight',
    timeout: 3000,
  };

  iziToast.show({
    ...iziToastOptions,
    ...options,
    message,
  });
}

function scroll(){
  const imageRef = document.querySelector('li.gallery-item')
  if (imageRef) {
    const rect = imageRef.getBoundingClientRect()
    window.scrollBy(0, rect.height * 2);
  }
}
