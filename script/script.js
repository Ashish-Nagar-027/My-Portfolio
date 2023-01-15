
const hamburgerButton = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const logoNone = document.querySelector(".logo");
const mainHeroArea = document.querySelector(".main-hero-area");
const showMoreProjectsBtn = document.querySelector(".show-more-projects-button");
const navbar = document.getElementById("nav");



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



// background animation
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    
    transform: document.querySelector(".particles-js-canvas-el").style.transform =
      "translate(0%, 0%)";
    document.querySelector(".particles-js-canvas-el").style.width = "100%";
    hamburgerButton.style.display = 'block'
  }, 5000);
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
    "UI/UX Developer",
  ],
  loop: true,
  typeSpeed: 150,
  startDelay: 1000,
  showCursor: true,
});

// =================================================
// all  projects  display

let projectDetailsArray = [
  {
    name : 'project 1',
    url : 'https://shopping-cart-by-ashish.vercel.app/',
    techStack : 'React',
    github: 'https://github.com/Ashish-Nagar-027/Shopping-cart-'
  },
  {
    name : 'project 2',
    url : 'https://pexel-photos-by-ashish-nagar.netlify.app/',
    techStack : 'Html,css,js',
    github: 'https://github.com/Ashish-Nagar-027/Pexel-photos'
  },
  {
    name : 'project 3',
    url : 'https://ashish-nagars-html-css-project-15.netlify.app/',
    techStack : 'HtmlAndCss',
    github: 'https://github.com/Ashish-Nagar-027/html-and-css-project-15'
  },
  {
    name : 'project 4',
    url : 'https://shopify-clone-by-ashish.netlify.app/',
    techStack : 'Tailwind',
    github: 'https://github.com/Ashish-Nagar-027/shopify-clone-with-tailwind'

  }
]


const projectContainerDiv = document.getElementById('projects-display-container')

projectDetailsArray.map((projectItem) => {

    const projectsDispley = document.createElement('div')

    projectsDispley.setAttribute('class', 'main-projects')
  
    projectsDispley.innerHTML = `
    <div class="tablet ">
      <div class="trim">
        <iframe  src="${projectItem.url}" alt="project image"></iframe>
      </div>
      <div class="project-links">
          <hr>
          <div class="btns">
            <div class="button"><a href="${projectItem.github}" target="_blank" >Github</a></div>
            <div class="button"><a href="${projectItem.url}" target="_blank" >Live preview</a></div>
          </div>
      </div>
    </div>
  `
  projectContainerDiv.appendChild(projectsDispley)
})



// =================================================



