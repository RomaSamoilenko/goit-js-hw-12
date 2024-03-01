export function pixabayAPI(searchQuery) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '42531560-9f80359c55485b48c70b7f04a';
    const URL = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(URL).then(res => res.json());
}