
const hamburgerButton = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const logoNone = document.querySelector(".logo");
const mainHeroArea = document.querySelector(".main-hero-area");
const showMoreProjectsBtn = document.querySelector(".show-more-projects-button");
const navbar = document.getElementById("nav");

//===================================
//cursor
var body = document.body
document.addEventListener('mousemove',(e) => {
  var elem = document.createElement('div'); 
    elem.setAttribute('class','trail')
    elem.setAttribute('style', `left: ${e.clientX-10}px; top:${e.clientY-10}px;`)
  
    elem.onanimationend= () => {
      elem.remove()
    }
    body.insertAdjacentElement('beforeend',elem)
  })
//===================================

//===================================
// Navbar
const mainHeroAreaHeignt = mainHeroArea.getBoundingClientRect();
const navHeignt = navbar.getBoundingClientRect();

var myScrollFunc = function () {
  var y = window.scrollY;
  let heroHeight = mainHeroAreaHeignt.height - navHeignt.height;
  if (y >= heroHeight) {
    document.getElementById("nav").style.background = "#101727";
    logoNone.style.display = 'flex'
  } else {
    document.getElementById("nav").style.background = "transparent";
    logoNone.style.display = 'none'
  }
};

window.addEventListener("scroll", myScrollFunc);
//===================================



// background animation
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    
     document.querySelector(".particles-js-canvas-el").style.transform =
      "translate(0%, 0%)";
    document.querySelector(".particles-js-canvas-el").style.width = "100%";
  }, 5000);
})

// hamburgurger show
window.addEventListener('load', () => {
  hamburgerButton.style.display = 'block'
})

// hamburger
function toggleButton() {
  if(navList.classList.contains("show")){
    navList.classList.remove("show")
     hamburgerButton.classList.remove('ham-clicked')
  }
  else{
    navList.classList.add("show")
    hamburgerButton.classList.add('ham-clicked')
  }
 
  logoNone.classList.toggle("logo-none");
}

hamburgerButton.addEventListener("click", toggleButton);


// remove
navList.addEventListener('click',(e)=> {
  if(e.target.tagName == "A") {
    if(navList.classList.contains("show")){
      navList.classList.remove("show")
      hamburgerButton.classList.remove('ham-clicked')
    }
  }
})

// ityped library
window.ityped.init(document.querySelector(".ityped"), {
  strings: [
    "Front-End Developer",
    "javaScript Developer",
    "UI Developer",
  ],
  loop: true,
  typeSpeed: 150,
  startDelay: 1000,
  showCursor: true,
});

