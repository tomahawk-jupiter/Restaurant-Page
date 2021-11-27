export default function loadBookingsPage() {
  console.log('Bookings loaded!');

  const content = document.querySelector('.content');
  content.replaceChildren();

  const bookingDetails = document.createElement('div');
  content.appendChild(bookingDetails);

  bookingDetails.innerHTML = `
  <div class="bookings-container">
    <h2>Booking Details</h2>
    <h3>Opening Times</h3>
    <p>Mon: 12pm - 11pm</p>
    <p>Tue: 12pm - 11pm</p>
    <p>Wed: 12pm - 11pm</p>
    <p>Thu: 12pm - 11pm</p>
    <p>Fri: 12pm - 12pm</p>
    <p>Sat: 12pm - 12am</p>
    <p>Sun: 12pm - 11pm</p>
    <h3>Contact</h3>
    <p>Tel: 12345 12345</p>

  <div>`;
}
