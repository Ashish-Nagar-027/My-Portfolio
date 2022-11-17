// hamburger

const hamburgerButton = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const logoNone = document.querySelector(".logo");
function toggleButton() {
  navList.classList.toggle("show");
  logoNone.classList.toggle("logo-none");
}

hamburgerButton.addEventListener("click", toggleButton);

