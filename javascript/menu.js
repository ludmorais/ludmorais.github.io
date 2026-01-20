document.addEventListener('DOMContentLoaded', () => { // quando o html carregar
  fetch('../../html/components/menu.html') // pego esse documento
  .then(res => res.text()) // quero pega-lo para usa-lo
  .then(html => {
    document.querySelector('#menu-container').innerHTML = html; // no html pelo esse id
    initMenu();
  })
})

function initMenu() { 
  let toggle = document.querySelector('.menu-toggle')
  const menu = document.querySelector('.menu.list')

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('isOpen')
    toggle.setAttribute('aria-expanded', isOpen) 
  })
}

