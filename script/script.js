// hamburger

const hamburgerButton = document.querySelector(".hamburger")
const navList = document.querySelector("#nav-list")
const logoNone = document.querySelector(".logo")
function toggleButton(){
    navList.classList.toggle('show')
    logoNone.classList.toggle('logo-none')
    
}

hamburgerButton.addEventListener('click', toggleButton)


// sticky navbar

window.addEventListener("scroll" , function() {
     var Nav = document.querySelector("nav");
     Nav.classList.toggle("sticky", window.scroll)
})