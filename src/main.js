import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
const search = document.querySelector('.search');
search.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const searchText = document.querySelector('.search-field').value;

  if (searchText.trim() === '') {
    search.reset();
  } else {
    fetchImages(searchText).then(data => {
      renderImages(data.hits);
    });
  }
}
