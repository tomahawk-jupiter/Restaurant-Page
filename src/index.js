import './style.css';
import loadHomepage from './homepage.js';
import loadMenuPage from './menu.js';
import loadBookingsPage from './bookings.js';

console.log('index.js loaded!');
// Initial page
loadHomepage();

const homeNav = document.querySelector('#home');
const menuNav = document.querySelector('#menu');
const bookingsNav = document.querySelector('#bookings');

homeNav.addEventListener('click', ()=> {
  loadHomepage();
});

menuNav.addEventListener('click', ()=> {
  loadMenuPage();
});

bookingsNav.addEventListener('click', ()=> {
  loadBookingsPage();
});
