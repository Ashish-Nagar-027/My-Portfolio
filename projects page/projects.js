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

let projectDetailsArray = [
    {
      name : 'project 1',
      url : 'https://shopping-cart-by-ashish-v2.netlify.app/',
      techStack : 'React',
      github: 'https://github.com/Ashish-Nagar-027/Shopping-cart-App'
    },
    {
      name : 'project 2',
      url : 'https://pexel-photos-by-ashish-nagar.netlify.app/',
      techStack : 'Html,css,js',
      github: 'https://github.com/Ashish-Nagar-027/Pexel-photos'
    },
    {
      name : 'project 3',
      url : 'https://fun-with-react-material-ui.netlify.app/',
      techStack : 'Html,css,js',
      github: 'https://github.com/Ashish-Nagar-027/React-MUI-Project-'
    },
    {
      name : 'project 4',
      url : 'https://rode-clone-with-tailwind.netlify.app/',
      techStack : 'Tailwind',
      github: 'https://github.com/Ashish-Nagar-027/Rode.com-clone-with-tailwind'
    },
    {
      name : 'project 5',
      url : 'https://shopify-clone-by-ashish.netlify.app/',
      techStack : 'Tailwind',
      github: 'https://github.com/Ashish-Nagar-027/shopify-clone-with-tailwind'
  
    },
    {
      name : 'project 6',
      url : 'https://js-time-player-by-ashish-nagar.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Js-Time-Player'
    },
    {
      name : 'project 7',
      url : 'https://random-quotes-and-jokes-generator.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Js-Quote-and-joke-generator'
    },
    {
      name : 'project 8',
      url : 'https://video-player-with-js.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/video-player-with-javaScript'
    },
    {
      name : 'project 9',
      url : 'https://js-word-player-by-ashish-nagar.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Js-word-player'
    },
    {
      name : 'project 10',
      url : 'https://ashish-nagars-html-css-project-15.netlify.app/',
      techStack : 'HtmlAndCss',
      github: 'https://github.com/Ashish-Nagar-027/html-and-css-project-15'
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
    {
      name : 'project 13',
      url : 'https://url-bookmarker-by-ashish-nagar.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Url-Book-Marker'
    },
    {
      name : 'project 14',
      url : 'https://ashish-nagars-html-css-project-12.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/html-and-css-project-12'
    },
    
    
  ]
  
  
const projectContainerDiv = document.getElementById('projects-display-container')
const moreBtn = document.getElementById('more')

  // function AddProjects() {
  //   function createProject(project,AddOn,attributeName){
    
  //     const projectsDispley = document.createElement('div')
    
  //     projectsDispley.setAttribute('class', attributeName)
    
  //     projectsDispley.innerHTML = `
  //     <div class="tablet ">
  //       <div class="trim">
  //         <iframe  src="${project.url}" alt="project image"></iframe>
  //       </div>
  //       <div class="project-links">
  //           <hr>
  //           <div class="btns">
  //             <div class="button"><a href="${project.github}" target="_blank" >Github</a></div>
  //             <div class="button"><a href="${project.url}" target="_blank" >Live preview</a></div>
  //           </div>
  //       </div>
  //     </div>
  //   `
  //     AddOn.appendChild(projectsDispley)
  //   }

  //   projectDetailsArray.map((projectItem,i) => {
  //     if(i < 6) {
  //       createProject(projectItem,projectContainerDiv,'main-projects')
  //     }
  //   })
    
  //   };
  
  

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

    let showProjectsNumber = 6
   
    document.addEventListener('DOMContentLoaded', () => {
      projectDetailsArray.map((projectItem,i) => {
        if(i < showProjectsNumber) {
          createProject(projectItem,projectContainerDiv,'main-projects')
        }
      })
    })
 
    
    

    moreBtn.addEventListener('click',() => {

           projectDetailsArray.map((projectItem,i) => {
            if(showProjectsNumber < i && i < projectDetailsArray.length) {
              createProject(projectItem,projectContainerDiv,'main-projects')
            }
            moreBtn.style.display = 'none'
          })
    })