import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { pixabayAPI } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const itemsWrap = document.querySelector('.items-wrap');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', getSearchResult);

function getSearchResult(evt) {
    evt.preventDefault();
    
    gallery.innerHTML = '';

    const searchQuery = form.elements.searchField.value.trim();
    if (searchQuery) {
        
        itemsWrap.classList.add('loading');

        pixabayAPI(searchQuery)
            .then(data => {
                
                itemsWrap.classList.remove('loading');

                if (data['hits'].length !== 0) {
                    renderGallery(gallery, data['hits']);
                    createLightboxInstance();
                } else {
                    showSearchError();
                }
            })
            .catch(err => {
                console.log(err);
                itemsWrap.classList.remove('loading');
            });
    }
}


function createLightboxInstance() {
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

function showSearchError() {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040'
    });
}