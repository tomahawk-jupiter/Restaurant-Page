export default function loadHomepage() {
  console.log('homepage loaded!');

  const content = document.querySelector('.content');
  content.replaceChildren();

  const homepageContainer = document.createElement('div');
  content.appendChild(homepageContainer);
  homepageContainer.setAttribute('class', 'homepage-container');

  const image = document.createElement('img');
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');

  homepageContainer.appendChild(image);
  homepageContainer.appendChild(header);
  homepageContainer.appendChild(paragraph);

  image.setAttribute('src',
    'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg');
  image.setAttribute('class', 'home-img');

  header.innerText = 'Mario\'s';
  paragraph.innerText = 'Mario\'s offers an authentic taste of Italy in a warm, family friendly atmosphere. We use only the highest quality and freshest of ingredients in our classic Italian dishes.';

}
