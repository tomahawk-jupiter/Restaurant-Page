export default function loadHomepage() {
  console.log('homepage loaded!');

  const content = document.querySelector('.content');

  const image = document.createElement('img');
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');

  content.appendChild(image);
  content.appendChild(header);
  content.appendChild(paragraph);

  image.setAttribute('src',
    'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg');

  header.innerText = 'Mario\'s';
  paragraph.innerText = 'Mario\'s offers an authentic taste of Italy in a warm, family friendly atmosphere. We use only the highest quality and freshest of ingredients in our classic Italian dishes.';




}
