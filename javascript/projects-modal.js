import { projects } from "./projects-data.js"

// Cards
const cardModal = document.querySelector(".cards-modal")
const modal = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal-content")

function renderCards(projects) {
  cardModal.innerHTML = projects 
    .map(project => `
      <div class="card card-portfolio" data-id="${project.id}">
        <i class="fa-solid fa-arrow-up fa-lg icon-card"></i>
        <span class="tag">${project.area}</span>
        ${project.project_in_progress === true ? `<span class="tag tag-inprogress page-in-progress">In progress</span> ` : ""}
        
        <span class="title-card">${project.title}</span>
        <span class="subtitle-card">${project.subtitle}</span>
      </div>
    `)
  .join("")
}
renderCards(projects)


// Open Modal 
cardModal.addEventListener("click", (event) => {
  const card = event.target.closest(".card")
  if (!card) return

  event.preventDefault()
  const id =  card.dataset.id
  renderModal(id)
  modal.classList.add("active") 
  
})

// Render Modal 
function renderModal (id) {
  const project = projects.find(project => project.id === id)

  if (project.page_in_progress === true) {
    window.location.href = "/html/pages/page-in-progress.html"

  } else {
    modalContent.innerHTML = ` 
    <button class="close-modal" id="closeModal">&times;</button>
    <h1>${project.title}</h1>
    <p>${project.overview_p01}</p><br>
    <p>${project.overview_p02}</p><br>
  `
  }
}

// Close modal btn or outside
modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target.classList.contains("close-modal")) {
    modal.classList.remove("active")
  }
}) 


// Close modal with ESC on keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("active")
  }
})


// Filter 

