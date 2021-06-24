
// Get the container element
let btnContainer = document.getElementById("topnav");
let btns = btnContainer.getElementsByClassName("btn");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    
   event.currentTarget.className += " active";
  });
}