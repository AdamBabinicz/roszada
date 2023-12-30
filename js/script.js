var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var yearRangeElement = document.getElementById("yearRange");
yearRangeElement.innerHTML = currentYear - 1 + " - " + currentYear;
