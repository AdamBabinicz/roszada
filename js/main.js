// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};
let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");
let navList = selectElement(".nav-list");
let closeBox = selectElement(".clo");
let x = selectElement(".popup_box");
let y = selectElement(".bg");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

navList.addEventListener("click", function () {
  body.classList.toggle("open");
});

closeBox.addEventListener("click", () => {
  x.classList.add("close");
  y.classList.remove("bg");
});
// Scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var startYear = 2019;
var yearRangeElement = document.getElementById("yearRange");
yearRangeElement.innerHTML = startYear + " - " + currentYear;
