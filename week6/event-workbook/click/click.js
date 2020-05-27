// make the box disapear when the user clicks it
var input = document.querySelector(".red-box");

function bunny() {
   input.style.visibility = "hidden";
}

input.addEventListener("click", bunny)