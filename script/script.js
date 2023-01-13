
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

  },
  {
    name : 'project 5',
    url : 'https://js-time-player-by-ashish-nagar.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/Js-Time-Player'
  },
  {
    name : 'project 6',
    url : 'https://random-quotes-and-jokes-generator.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/Js-Quote-and-joke-generator'
  },
  {
    name : 'project 7',
    url : 'https://video-player-with-js.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/video-player-with-javaScript'
  },
  {
    name : 'project 8',
    url : 'https://js-word-player-by-ashish-nagar.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/Js-word-player'
  },
  {
    name : 'project 9',
    url : 'https://rode-clone-with-tailwind.netlify.app/',
    techStack : 'Tailwind',
    github: 'https://github.com/Ashish-Nagar-027/Rode.com-clone-with-tailwind'
  },
  {
    name : 'project 10',
    url : 'https://ashish-nagars-html-css-project-12.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/html-and-css-project-12'
  },
  {
    name : 'project 11',
    url : 'https://ashish-nagars-html-css-project-11.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/html-and-css-project-11'
  },
  {
    name : 'project 12',
    url : 'https://todo-list-with-js-by-ashish-nagar.netlify.app/',
    techStack : 'javaScript',
    github: 'https://github.com/Ashish-Nagar-027/JS-Todo-List-Project'
  },
]


const projectContainerDiv = document.getElementById('projects-display-container')
const projectContainerDiv_2 = document.getElementById('projects-display-container-2')

showMoreProjectsBtn.addEventListener('click', ()=> {
  if(projectContainerDiv_2.classList.contains('show-extra-projects')){
    projectContainerDiv_2.classList.remove('show-extra-projects')
    showMoreProjectsBtn.innerText = 'show more'
  } 
  else {
    showMoreProjectsBtn.innerText = 'Hide more'
    projectContainerDiv_2.classList.add('show-extra-projects')
  }
})

function createProject(project,AddOn,attributeName){

  const projectsDispley = document.createElement('div')

  projectsDispley.setAttribute('class', attributeName)

  projectsDispley.innerHTML = `
  <div class="tablet ">
    <div class="trim">
      <iframe  src="${project.url}" alt="project image"></iframe>
    </div>
    <div class="project-links">
        <hr>
        <div class="btns">
          <div class="button"><a href="${project.github}" target="_blank" >Github</a></div>
          <div class="button"><a href="${project.url}" target="_blank" >Live preview</a></div>
        </div>
    </div>
  </div>
`
  AddOn.appendChild(projectsDispley)
}


projectDetailsArray.map((projectItem,i) => {
  if (i < 4) {
    createProject(projectItem,projectContainerDiv,'main-projects')
  }
  else {
  createProject(projectItem,projectContainerDiv_2,'extraa-projects')
  }
})



// =================================================



