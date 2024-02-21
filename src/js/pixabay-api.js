import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api'
});

const API_KEY = '/?key=42320739-3511db631b1999bc59ca675c6';

export async function getImages(query, page, quantity) {
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${quantity}`;

  const url = API_KEY + PARAMS;

  try {
    const res = await instance.get(url);
    return res.data;
  } catch(err) {
    throw new Error(err.message);
  }
}
