const menuItems = [
  {
    name: "Tomato Pasta",
    image:
      "https://images.pexels.com/photos/4057736/pexels-photo-4057736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "Delicious freshly made spaghetti with a sun dried tomato and basil sauce.",
    price: "$12",
  },
  {
    name: "Pizza",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "Freshly made dough, mozzarella cheese, black olives and topped with rocket.",
    price: "$12",
  },
  {
    name: "Red Wine",
    image:
      "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "Fragrant and fruity",
    price: "$5",
  },
];

export default function loadMenuPage() {
  const content = document.querySelector(".content");
  content.replaceChildren();

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "menu-container");
  content.appendChild(menuContainer);

  const header = document.createElement("h1");
  header.innerText = "MENU";
  menuContainer.appendChild(header);

  // Wrapper container for menu items to help with CSS layout //
  const menuItemWrapper = document.createElement("div");
  menuItemWrapper.setAttribute("class", "menu-item-wrapper");
  menuContainer.appendChild(menuItemWrapper);

  // Create a menu item card for each menu item //
  menuItems.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "menu-item-card");

    const imgElem = document.createElement("img");
    imgElem.setAttribute("src", item.image);
    imgElem.setAttribute("alt", item.name);
    cardDiv.appendChild(imgElem);

    const nameElem = document.createElement("h3");
    nameElem.innerText = item.name;
    cardDiv.appendChild(nameElem);

    const descElem = document.createElement("p");
    descElem.innerText = item.desc;
    cardDiv.appendChild(descElem);

    const priceElem = document.createElement("h4");
    priceElem.innerText = item.price;
    cardDiv.appendChild(priceElem);

    menuItemWrapper.appendChild(cardDiv);
  });
}
