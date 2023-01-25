import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '30737350-82f55820a31d3ae852bd21a9d';
const PARAMS = 'image_type=photo&orientation=horizontal';

export const fetchImagesWithQuery = async (searchQuery, page = 1) => {
  const response = axios.get(
    `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&${PARAMS}`
  );
  return response;
};
