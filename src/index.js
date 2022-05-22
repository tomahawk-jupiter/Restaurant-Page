import "./style.css";
import loadHomepage from "./homepage.js";
import loadMenuPage from "./menu.js";
import loadBookingsPage from "./bookings.js";

loadHomepage(); // Initial page

const homeNav = document.querySelector("#home");
const menuNav = document.querySelector("#menu");
const bookingsNav = document.querySelector("#bookings");

// Add event listeners to navbar options that render the pages with JS //

homeNav.addEventListener("click", () => {
  loadHomepage();
});

menuNav.addEventListener("click", () => {
  loadMenuPage();
});

bookingsNav.addEventListener("click", () => {
  loadBookingsPage();
});
