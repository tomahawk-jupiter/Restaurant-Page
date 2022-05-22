export default function loadHomepage() {
  const content = document.querySelector(".content");
  content.replaceChildren();

  const image = document.createElement("img");
  content.appendChild(image);

  const homepageContainer = document.createElement("div");
  homepageContainer.setAttribute("class", "homepage-container");

  const header = document.createElement("h1");
  const paragraph = document.createElement("p");

  content.appendChild(homepageContainer);
  homepageContainer.appendChild(header);
  homepageContainer.appendChild(paragraph);
  image.setAttribute(
    "src",
    "https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  );
  image.setAttribute("class", "home-img");

  header.innerText = "Mario's";
  paragraph.innerText =
    "Mario's offers an authentic taste of Italy in a warm, family friendly atmosphere. We use only the highest quality and freshest of ingredients in our classic Italian dishes.";
}
