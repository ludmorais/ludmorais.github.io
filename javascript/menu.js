document.addEventListener('DOMContentLoaded', () => { // quando o html carregar
  fetch('../../html/components/menu.html') // pego esse documento
    .then(res => res.text()) // quero pega-lo para usa-lo
    .then(html => {
      document.querySelector('.menu-container').innerHTML = html; // no html pelo esse id
      initMenu();
    })
})

function initMenu() {
  const toggle = document.querySelector('.menu-toggle')
  const menu = document.querySelector('.menu-list')

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('isOpen') // se a classe existe, remove. Se nao
    // o toggle é o mesmo que: 
    /*
    let isOpen;
    if (menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      isOpen = false;
    } else {
      menu.classList.add('is-open');
      isOpen = true;
    }
    */
    toggle.setAttribute('aria-expanded', isOpen) // const isOpen retorna false ou true 
  })
}

