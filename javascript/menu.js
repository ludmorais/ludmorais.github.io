
/*
document.getElementById('menu-btn').addEventListener('click', () => {
  fetch('../../html/components/menu.html') // pego esse documento
    .then(res => res.text()) // quero pega-lo para usa-lo
    .then(html => {
      let container = document.querySelector('#menu-container')
      container.innerHTML = html;
      initMenu();
    });

})


function initMenu() {
  // adc uma classe junto com menu-container (la no css essa classe vai mudar a cor do brackgroud)

  let menu = document.querySelector('.menu-container')
  menu.classList.add('transition')

  document.getElementById('menu-btn').addEventListener('click', () => {
    const closeMenu = menu.classList.toggle('close-menu')
  })

  document.getElementById('icon-btn').addEventListener('click', () => {
    const closeMenu = menu.classList.toggle('close-menu')
  })

}
*/
const menuHTML = `
  <nav class="side-menu">
  <div>
    <a class="btn-icon primary" aria-expanded="true" id="close-menu">
        <i class="fa-solid fa-close fa-lg"></i>
    </a>
  </div>
  
  <div class="menu-list">
    <ul>
      <li class="container-menu-link"><a href="../index.html" class="menu-link">Project</a></li>
      <li class="container-menu-link"><a href="../html/pages/about.html" class="menu-link">About Me</a></li>
      <li class="container-menu-link"><a href="../html/pages/contact.html" class="menu-link">Contact</a></li>
    </ul>

    <div class="container-social-media menu-social-media">
      <button class="btn-icon border light"><i class="fa-brands fa-linkedin-in fa-lg"></i></button>
      <button class="btn-icon border light"><i class="fa-brands fa-github fa-lg"></i></button>
      <button class="btn-icon border light"><i class="fa-brands fa-medium fa-lg"></i></button>
    </div>
  </div>
</nav>
`


const container = document.querySelector('#menu-container')
const menuBtn = document.querySelector('#menu-btn')
const overlay = document.querySelector('#overlay')

// injetar HTML
/*
fetch('../../html/components/menu.html') // pego esse documento
  .then(res => res.text()) // quero pega-lo para usa-lo
  .then(html => {
    container.innerHTML = html;
  });
*/

// injetar HTML
container.innerHTML = menuHTML

const sideMenu = container.querySelector('.side-menu')
const closeBtn = container.querySelector('#close-menu')

// abrir 
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active')
  overlay.classList.add('active')
})

/*menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('active')) {
    sideMenu.classList.remove('active')
    overlay.classList.remove('active') 
  } 
})*/



const closeMenu = () => {
  sideMenu.classList.remove('active')
  overlay.classList.remove('active') 
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
