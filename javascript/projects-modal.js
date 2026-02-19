import { projects } from "./projects-data.js"

// Cards
const cardModal = document.querySelector(".cards-modal")
const modal = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal-content")

function renderCards(projects) {
  const projectDisplayed = cardModal.classList.contains("preview") ? projects.slice(-2) : projects

  cardModal.innerHTML = projectDisplayed
    .map(project => `
      <div class="card" data-id="${project.id}" style="background: linear-gradient(var(--color-opacity-dark-75)), url(${project.image_card})">
        <i class="fa-solid fa-arrow-up fa-lg icon-card"></i>
        <span class="tag">${project.area}</span>
        ${project.project_in_progress === true ? `<span class="tag tag-inprogress">In progress</span> ` : ""}
            
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
  const id = card.dataset.id
  renderModal(id)
  modal.classList.add("active")
  document.body.classList.add("modal-open")

})

// Render Modal 
function renderModal(id) {
  const project = projects.find(project => project.id === id)

  if (project.page_in_progress === true) {
    window.location.href = "/html/pages/page-in-progress.html"

  } else {
    modalContent.innerHTML = ` 
    <!-- Button Modal -->
    <div class="close-modal">
      <button class="btn-icon secundary">
          <i class="fa-solid fa-close fa-lg"></i>
      </button>
    </div>

    <!-- Section Introduction -->
    <div class="introduction-title-box"> 
      <h1 class="introduction-title-03">${project.title}</h1>
      <h1 class="introduction-title-03">${project.area} ${project.workproject_OR_personalproject}</h1>
      <img src="${project.image_mockup}" alt="mockup-project" class="mockup-project">
    </div>

    <div class="section-title">
        <i class="fa-solid fa-circle fa-2xs icon-section-title"></i>
        <span class="text-section-title">Overview</span>
    </div>
    <!-- End of Section Introduction -->

    <!-- Overview -->
    <div class="text-box-center">
      <p class="text-poppins-02">${project.overview}</p>
    </div>
    <!-- End of Overview -->

    <hr class="space-between-section-12px">

    <!-- Tools and Technologies -->
    <div class="section-title">
      <i class="fa-solid fa-circle fa-2xs icon-section-title"></i>
      <span class="text-section-title">Tools and Technologies</span>
    </div>

    <div class="badge-box">
      ${project.tool_figma === true ? `<span class="badge badge-figma">Figma</span>` : ""}
      ${project.tool_adobexd === true ? `<span class="badge badge-adobexd">Adobe XD</span>` : ""}
      ${project.tool_html === true ? `<span class="badge badge-html">HTML</span>` : ""}
      ${project.tool_css === true ? `<span class="badge badge-css">CSS</span>` : ""}
      ${project.tool_js === true ? `<span class="badge badge-js">JavaScript</span>` : ""}
      ${project.tool_vscode === true ? `<span class="badge badge-vscode">VS Code</span>` : ""}
      ${project.tool_react === true ? `<span class="badge badge-react">React</span>` : ""}
      ${project.tool_typescript === true ? `<span class="badge badge-typescript">TypeScript</span>` : ""}    
    </div>

    <hr class="space-between-section-12px">

    <!-- The Process -->
    <div class="section-title">
      <i class="fa-solid fa-circle fa-2xs icon-section-title"></i>
      <span class="text-section-title">The Problem and The Solution</span>
    </div>

    <div class="text-box-center">
      <p class="text-poppins-02">Read a little about some small parts of the process, concerning the main points such as the specific problem and solution of this project.</p>
    </div>
    <img src="/assets/images/Illustration-process.png" class="image-illutration" alt="Process Illustration">

    <!-- The Problem -->
    <div class="section-subtitle">
      <img src="/assets/images/right-arrow-process.png" alt="arrow">
      <span class="text-section-subtitle">The Problem</span>
    </div>

    <div class="text-box-center">
      <p class="text-poppins-02">${project.problem}</p>
    </div>

    <!-- The Solution -->
    <div class="section-subtitle">
      <img src="/assets/images/left-arrow-process.png" alt="arrow">
      <span class="text-section-subtitle">The Solution and Final Screens</span>
    </div>

    <div class="text-box-center">
      <p class="text-poppins-02">${project.solution}</p>
    </div>
    <!-- End of The Process -->

    <div class="container-text">
      <button class="btn-back-to-top">
        <i class="fa-solid fa-angles-up fa-lg"></i>Back to Top
      </button>
    </div>
  `
  }
}

// Close modal btn or outside
modal.addEventListener("click", (event) => {
  if (event.target === modal || event.target.closest(".close-modal")) {
    modal.classList.remove("active")
    document.body.classList.remove("modal-open")
  }
})


// Close modal with ESC on keyboard
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active")
    document.body.classList.remove("modal-open")
  }
})

// Btn Back to Top
modalContent.addEventListener("click", (event) => {
  if (event.target.closest(".btn-back-to-top")) {
    modalContent.scrollTo({ top: 0, behavior: "smooth" })
  }
})


// Filter 

// capturar o bloco de filtros 
const filters = document.querySelector("#select-filter")

// escuto click em algum dos elementos dentro do bloco de filtros 
filters.addEventListener("click", (event) => {
  if (event.target.classList.contains("badge-filter")) {
    event.preventDefault()
    const category = event.target.value
    filterProjects(category)
    localStorage.setItem("selectedCategory", category)
  }
})

// se o elemento clicado tiver value = frontend, busco no array de projetos todos os projetos que tem area = "Front-End"
function filterProjects(category) {
  let filtered = []

  if (category === "frontend") {
    filtered = projects.filter(project => project.area === "Front-End")
  } else if (category === "uxui") {
    filtered = projects.filter(project => project.area === "UX/UI")
  } else if (category === "all") {
    filtered = projects
  } 

  renderCards(filtered)
  setActiveBadge(category)
}

// persiste para deixar filtrados e o botao active

function setActiveBadge(category) {
  // remove from all
  const badges = document.querySelectorAll(".badge-filter")
  badges.forEach(bagde => bagde.classList.remove("active"))

  const activeBagde = document.querySelector(`.badge-filter[value="${category}"]`)
  if (activeBagde) {
    activeBagde.classList.add("active")

  }
}

function applySavedFilter() {
  const savedCategory = localStorage.getItem("selectedCategory") || "all"
  filterProjects(savedCategory)
}
applySavedFilter()


