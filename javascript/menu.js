/*----------------------------------------*/
/* MENU MOBILE */
/*----------------------------------------*/

// HTML text
const menuHTML = `
  <nav class="side-menu">
  <div>
    <button class="btn-icon secundary" aria-expanded="true" id="close-menu">
        <i class="fa-solid fa-close fa-lg"></i>
    </button>
  </div>
  
  <div class="menu-list">
    <ul>
      <li class="container-menu-link"><a href="/index.html" class="menu-link">Project</a></li>
      <li class="container-menu-link"><a href="/html/pages/about.html" class="menu-link">About Me</a></li>
      <li class="container-menu-link"><a href="/html/pages/contact.html" class="menu-link">Contact</a></li>
    </ul>

    <div class="container-social-media">
          <a href="https://www.linkedin.com/in/ludmillamorais/" target="_blank" class="btn-icon border light"><i
              class="fa-brands fa-linkedin-in fa-lg"></i></a>
          <a href="https://github.com/ludmorais" target="_blank" class="btn-icon border light"><i
              class="fa-brands fa-github fa-lg"></i></a>
          <!--<a href="https://medium.com/@ludmilla-morais" class="btn-icon border light"><i class="fa-brands fa-medium fa-lg"></i></a>-->
        </div>
  </div>
</nav>
`

// get HTML elements (index.html)
let container = document.querySelector('#menu-container')
let menuMobile = document.querySelector('#menu-mobile')
let overlay = document.querySelector('#overlay')

// add HTML
container.innerHTML = menuHTML

let sideMenu = container.querySelector('.side-menu')
let closeBtn = container.querySelector('#close-menu')

// open menu 
menuMobile.addEventListener('click', () => {
  sideMenu.classList.add('active')
  overlay.classList.add('active')
})

// close menu
let closeMenu = () => {
  sideMenu.classList.remove('active')
  overlay.classList.remove('active')
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// highlighted current path 
let currentPath = window.location.pathname;
let links = document.querySelectorAll('.menu-link');
links.forEach(link => {
  let linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});




/*----------------------------------------*/
/* MENU DESKTOP */
/*----------------------------------------*/

// HTML text 
const menuHTMLdesktop = `
  <ul class="menu-desktop">
    <li><a href="/index.html" class="menu-desktop-link">Project</a></li>
    <li><a href="/html/pages/about.html" class="menu-desktop-link">About Me</a></li>
    <li><a href="/html/pages/contact.html" class="menu-desktop-link">Contact</a></li>
  </ul>
`
// get HTML elements (index.html)
let menuDesktop = document.querySelector('#menu-desktop')
menuDesktop.innerHTML = menuHTMLdesktop

// highlighted current path 
let currentPathDesktop = window.location.pathname;
let linksDesktop = document.querySelectorAll('.menu-desktop-link');
linksDesktop.forEach(linkDesktop => {
  let linkPathDesktop = new URL(linkDesktop.href).pathname;
  if (linkPathDesktop === currentPathDesktop) {
    linkDesktop.classList.add('active');
  }
});

