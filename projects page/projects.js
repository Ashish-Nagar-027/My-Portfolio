let projectDetailsArray = [
    {
      name : 'project 1',
      url : 'https://shopping-cart-by-ashish-nagar.netlify.app/',
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
    {
      name : 'project 13',
      url : 'https://url-bookmarker-by-ashish-nagar.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Url-Book-Marker'
    },
    {
      name : 'project 14',
      url : 'https://ashish-nagars-html-css-project-9.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/HTML-and-CSS-project-9'
    },
    {
      name : 'project 15',
      url : 'https://ashish-nagars-html-css-project-1.netlify.app/',
      techStack : 'javaScript',
      github: 'https://github.com/Ashish-Nagar-027/Html-and-CSS-Project-1 '
    },
  ]
  
  
const projectContainerDiv = document.getElementById('projects-display-container')

  function AddProjects() {
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
        createProject(projectItem,projectContainerDiv,'main-projects')
    })
    
    };
    
    AddProjects()