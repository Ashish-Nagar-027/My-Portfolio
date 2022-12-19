
const hamburgerButton = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const logoNone = document.querySelector(".logo");
const mainHeroArea = document.querySelector(".main-hero-area");
const navbar = document.getElementById("nav");


// Navbar
const mainHeroAreaHeignt = mainHeroArea.getBoundingClientRect();
const navHeignt = navbar.getBoundingClientRect();

var myScrollFunc = function () {
  var y = window.scrollY;
  let heroHeight = mainHeroAreaHeignt.height - navHeignt.height;
  if (y >= heroHeight) {
    document.getElementById("nav").style.background = "#242B2E";
    logoNone.style.display = 'flex'
  } else {
    document.getElementById("nav").style.background = "transparent";
    logoNone.style.display = 'none'
  }
};

window.addEventListener("scroll", myScrollFunc);



// background animation
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    transform: document.querySelector(".particles-js-canvas-el").style.transform =
      "translate(0%, 0%)";
    document.querySelector(".particles-js-canvas-el").style.width = "100%";
    document.querySelector(".hero-text h1").style.transition =  "background 0.5s ease 3s";
    document.querySelector(".hero-text h1").style.background = "rgba(36, 43, 46, 0.6)";
  }, 5000);
})



// hamburger
function toggleButton() {
  navList.classList.toggle("show");
  hamburgerButton.classList.toggle('ham-clicked')
  logoNone.classList.toggle("logo-none");
}

hamburgerButton.addEventListener("click", toggleButton);
