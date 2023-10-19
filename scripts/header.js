//Code for sticky header
window.addEventListener("scroll", function() { //Execute this code whenever the page scrolls
  var header = document.querySelector("header"); //Get element that has a tag of header
  header.classList.toggle("sticky", window.scrollY > 100) //Toggle the sticky class to the header if the scrollY of the window is more than 100
});


//Code for dropdown showing
document.addEventListener('click', e => {//Execute this code whenever the user clicks
  const isDropdownButton = e.target.matches(".dropdownBtn"); //Define boolean that is true if the loaction that the user clicks matches the location of the dropdown button
  if(!isDropdownButton && e.target.closest('.dropdown') != null) return; //If the above boolean is false and the closest element with dropdown class is not equal to null, then it returns the function and doesn't do anything

  let currentDropdown;
  if(isDropdownButton){ // If the boolean is true
    currentDropdown = e.target.closest('.dropdown'); //Define currentDropdown as the closed element with the class .dropdown
    currentDropdown.classList.toggle('active'); //Toggle class active on this element 
  }

  document.querySelectorAll(".dropdown.active").forEach(dropdown => { //Loop through all the elements with the both the dropdown class and active class
    if(dropdown === currentDropdown) return; //If this element is equal to the current dropdown, it returns the function and doesn't do anything
    dropdown.classList.remove("active"); //Remove the class active from this dropdown
  })
})