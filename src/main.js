
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { pixabayAPI } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const itemsWrap = document.querySelector('.items-wrap');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

let searchQuery;
let page;
let maxPage;
const PER_PAGE = 15;
let lightbox;

form.addEventListener('submit', getSearchResult);
loadMore.addEventListener('click', onLoadMoreClick);

async function getSearchResult(evt) {
    evt.preventDefault();
    
    gallery.innerHTML = '';

    page = 1;
    maxPage = 1;
    
    loadMore.classList.add('hidden');

    searchQuery = form.elements.searchField.value.trim();
    if (searchQuery) {
        
        showLoader();

        try {
            const data = await pixabayAPI(searchQuery, PER_PAGE, page);

            if (data['hits'].length !== 0) {
                maxPage = Math.ceil(data.totalHits / PER_PAGE);

                renderGallery(gallery, data['hits']);
                createLightboxInstance();
                
                endSearchResultsMsg();
            } else {
                
                const options = {
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    bgColor: '#EF4040',
                    progressColor: '#B51B1B',
                };
                showSearchError(options);
            }
        } catch (err) {
            console.log(err);
        }

        hideLoader();
    }
    showHideLoadBtn();
    form.reset();
}

async function onLoadMoreClick() {
    page += 1;
    
    showLoader();

    const data = await pixabayAPI(searchQuery, PER_PAGE, page);
    renderGallery(gallery, data['hits']);

    
    lightbox.refresh();
    
    hideLoader();
    
    endSearchResultsMsg();
    
    showHideLoadBtn();
    
    scrollToElements();
}


function createLightboxInstance() {
    lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

function showLoader() {
    itemsWrap.classList.add('loading');
}

function hideLoader() {
    itemsWrap.classList.remove('loading');
}

function scrollToElements() {
    const scrollHeight = gallery.firstElementChild.getBoundingClientRect().height * 2;

    window.scrollBy({
        behavior: 'smooth',
        top: scrollHeight,
    });
}


function showSearchError({ message, bgColor, progressColor }) {
    iziToast.error({
        message: message,
        messageColor: '#fff',
        backgroundColor: bgColor,
        theme: 'dark',
        position: 'topRight',
        timeout: 3000,
        progressBarColor: progressColor,
        animateInside: false,
        transitionIn: 'fadeIn',
    });
}

function showHideLoadBtn() {
    if (page >= maxPage) {
        loadMore.classList.add('hidden');
    } else {
        loadMore.classList.remove('hidden');
    }
}

function endSearchResultsMsg() {
    if (page >= maxPage) {
        const options = {
            message: "We're sorry, but you've reached the end of search results.",
            bgColor: '#2db4cf',
            progressColor: '#40666e',
        };

        showSearchError(options);
    }
}