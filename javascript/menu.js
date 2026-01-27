// HTML
const menuHTML = `
  <nav class="side-menu">
  <div>
    <a class="btn-icon secundary" aria-expanded="true" id="close-menu">
        <i class="fa-solid fa-close fa-lg"></i>
    </a>
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
const container = document.querySelector('#menu-container')
const menuBtn = document.querySelector('#menu-btn')
const overlay = document.querySelector('#overlay') 

// add HTML
container.innerHTML = menuHTML

const sideMenu = container.querySelector('.side-menu')
const closeBtn = container.querySelector('#close-menu')

// open menu 
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active')
  overlay.classList.add('active')
})

// close menu
const closeMenu = () => {
  sideMenu.classList.remove('active')
  overlay.classList.remove('active') 
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


////////

const currentPath = window.location.pathname;
const links = document.querySelectorAll('.menu-link');

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});
