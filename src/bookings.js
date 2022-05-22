const openingTimes = [
  {
    day: "Mon",
    time: "12pm - 11pm",
  },
  {
    day: "Tue",
    time: "12pm - 11pm",
  },
  {
    day: "Wed",
    time: "12pm - 11pm",
  },
  {
    day: "Thu",
    time: "12pm - 11pm",
  },
  {
    day: "Fri",
    time: "12pm - 12pm",
  },
  {
    day: "Sat",
    time: "12pm - 12pm",
  },
  {
    day: "Sun",
    time: "12pm - 11pm",
  },
];

export default function loadBookingsPage() {
  const content = document.querySelector(".content");
  content.replaceChildren(); // Clear the previous content

  const bookingsContainer = document.createElement("div");
  bookingsContainer.setAttribute("class", "bookings-container");
  content.appendChild(bookingsContainer);

  const bookingHeader = document.createElement("h1");
  bookingHeader.innerText = "Booking Details";
  bookingsContainer.appendChild(bookingHeader);

  const openTimesHeader = document.createElement("h3");
  openTimesHeader.innerText = "Opening Times";
  bookingsContainer.appendChild(openTimesHeader);

  // Loop opening times array and create DOM elements for each //
  openingTimes.forEach((eachDay) => {
    const pTag = document.createElement("p");
    pTag.innerText = `${eachDay.day}: ${eachDay.time}`;
    bookingsContainer.appendChild(pTag);
  });

  const contactHeader = document.createElement("h3");
  contactHeader.innerText = "Contact";

  bookingsContainer.appendChild(contactHeader);

  const pTel = document.createElement("p");
  pTel.innerText = "Tel: 12345 12345";

  bookingsContainer.appendChild(pTel);
}
