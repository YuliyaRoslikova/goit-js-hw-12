export function getImagesMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img 
          class="gallery-img"
          src="${webformatURL}"
          alt="${tags}"
        />
        <div class="descriptions">
          <div class="img-descriptions">
            <p class="img-title">Likes</p>
            <p class="img-content">${likes}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Views</p>
            <p class="img-content">${views}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Comments</p>
            <p class="img-content">${comments}</p>
          </div>
          <div class="img-description">
            <p class="img-title">Downloads</p>
            <p class="img-content">${downloads}</p>
          </div>
        </div>
      </a>
    </li>`;
      }
    )
    .join('');
}
