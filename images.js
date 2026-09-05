// Product photos uploaded to the same GitHub repository.
const productPhotos = {
  'Argentina Home Jersey': 'arg.jpg',
  'Barcelona Home Jersey': 'barca.jpg',
  'Brazil Home Jersey': 'brazil.jpg',
  'Portugal Home Jersey': 'portugal.jpg',
  'Manchester City Jersey': 'images (2)city.jpg',
  'France Home Jersey': 'france.jpg',
  'Liverpool Home Jersey': 'liverpool.jpg'
};

function showProductPhotos() {
  document.querySelectorAll('.product').forEach((card) => {
    const name = card.querySelector('h3')?.textContent;
    const photo = productPhotos[name];
    const art = card.querySelector('.product-art');
    if (photo && art) {
      art.innerHTML = `<img src="${encodeURI(photo)}" alt="${name}" style="height:100%; max-width:100%; object-fit:cover; width:100%;" />`;
    }
  });
}

showProductPhotos();
new MutationObserver(showProductPhotos).observe(document.querySelector('#productsList'), { childList: true });
