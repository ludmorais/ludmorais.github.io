document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", function(event){
    const link = event.target.closest("a")

    if(!link) return;

    event.preventDefault()
    event.stopImmediatePropagation()

    if (link.hasAttribute("data-in-progress")) {
      window.location.href = "/html/components/in-progress.html";
    } else {
      window.location.href = link.href
    }
    
  },true )
})
  
