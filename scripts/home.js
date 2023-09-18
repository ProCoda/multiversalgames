
window.onscroll = function() {stickyFunction();};







function stickyFunction() {
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  console.log(window.scrollY + " "+sticky)
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}