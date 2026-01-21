/* 
  document.addEventListener('DOMContentLoaded', () => { // quando o html carregar
    fetch('../../html/components/menu.html') // pego esse documento
      .then(res => res.text()) // quero pega-lo para usa-lo
      .then(html => {
        document.querySelector('.menu-container').innerHTML = html; // no html pelo esse id
        initMenu();
      })
  })

  function initMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu-list')

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('isOpen') // se a classe existe, remove. Se nao
      const closeBtn = menu.classList.toggle('closeBtn') // se a classe existe, remove. Se nao
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
/*
 toggle.setAttribute('aria-expanded', isOpen) // const isOpen retorna false ou true 
})
}

*/


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


/*menu.classList.add('menu-close')

function click() {
  if (menuList.classList.contains('menu-close')) {
    menu.classList.remove('menu-close')
    menu.classList.add('menu-open')
    window.alert('funciocou!')

  } else {
    menu.classList.add('menu-close')
    
  }

}

*/



