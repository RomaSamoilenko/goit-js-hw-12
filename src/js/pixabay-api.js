
import axios from 'axios';

export async function pixabayAPI(searchQuery, perPage, currentPage) {
    const API_KEY = '42531560-9f80359c55485b48c70b7f04a';
    const URL = 'https://pixabay.com/api/';

    const params = {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: currentPage,
    };

    const res = await axios.get(URL, { params });
    return res.data;
}