import { projects } from "./projects-data.js"

// Cards
const cardModal = document.querySelector(".cards-modal")
const modal = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal-content")

function renderCards(projects) {
  cardModal.innerHTML = projects
    .map(project => `
      <div class="card ${project.image_card}" data-id="${project.id}">
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
      <h1 class="introduction-title-03">${project.area} ${project.project_OR_case}</h1>
      <img src="${project.image_mockup}" alt="mockup-project" class="mockup-project">
    </div>

    <div class="section-title">
        <i class="fa-solid fa-circle fa-2xs icon-section-title"></i>
        <span class="text-section-title">Overview</span>
    </div>
    <!-- End of Section Introduction -->

    <!-- Overview -->
    <div class="text-box-center">
      <p class="text-poppins-02">${project.overview_p01}</p>
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
      ${project.tool_react === true ? `<span class="badge badge-react">Reacr</span>` : ""}
      ${project.tool_typescript === true ? `<span class="badge badge-typescript">TypeScript</span>` : ""}    
    </div>

    <hr class="space-between-section-12px">

    <!-- The Process -->
    <div class="section-title">
      <i class="fa-solid fa-circle fa-2xs icon-section-title"></i>
      <span class="text-section-title">The Problem and The Solution</span>
    </div>

    <div class="text-box-center">
      <p class="text-poppins-02">Read a little about some small parts of the process, concerning the main ponts such as the specific problem and solution of this project.</p>
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

    <button href="#introduction-title-box" class="btn-text-icon">
      <i class="fa-solid fa-arrow-up fa-lg"></i>Back to Projects
    </button>


  

    





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


// Filter 







