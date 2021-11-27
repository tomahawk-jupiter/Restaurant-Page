export default function loadMenuPage() {
  console.log('menu loaded!');

  const content = document.querySelector('.content');
  content.replaceChildren();

  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu-container');
  content.appendChild(menuContainer);

  const pastaDiv = document.createElement('div');
  const pizzaDiv = document.createElement('div');
  const wineDiv = document.createElement('div');

  menuContainer.appendChild(pastaDiv);
  menuContainer.appendChild(pizzaDiv);
  menuContainer.appendChild(wineDiv);

  pastaDiv.innerHTML = `
  <h1>Menu</h1>

  <div class="menu-card">
    <img
      src="https://images.pexels.com/photos/4057736/pexels-photo-4057736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Tomato Spaghetti"></img>
    <h3>Tomato Pasta</h3>
    <p>
      Delicious freshly made spaghetti with a sun dried tomato and basil sauce.
    </p>
    <h4>$12</h4>
  </div>`;

  pizzaDiv.innerHTML = `
    <div class="menu-card">
      <img
        src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="pizza">
      </img>
      <h3>Pizza</h3>
      <p>Freshly made dough, mozzarella cheese, black olives and topped with rocket.</p>
      <h4>$12</h4>
    </div>`;

    wineDiv.innerHTML = `
      <div class="wine-card">
        <img
          src="https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="red wine">
        </img>
        <h3>Red Wine</h3>
        <p>Fragrant and fruity</p>
        <h4>$5</h4>
      </div>`;
}
