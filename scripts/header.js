//Code for sticky header
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
});


//Code for dropdown showing
document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches(".dropdownBtn");
  if(!isDropdownButton && e.target.closest('.dropdown') != null) return;

  let currentDropdown;
  if(isDropdownButton){
    currentDropdown = e.target.closest('.dropdown');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll(".dropdown.active").forEach(dropdown => {
    if(dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  })
})