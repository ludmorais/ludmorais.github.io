document.querySelectorAll("a.page-in-progress").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "/html/pages/page-in-progress.html"; 
  }); 
});