export function getImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const API_KEY = '/?key=42320739-3511db631b1999bc59ca675c6';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + API_KEY + PARAMS;

  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw new Error(err.status);
    });
}
