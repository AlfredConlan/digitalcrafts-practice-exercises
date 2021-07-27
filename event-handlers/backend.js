// Style 1 using onclick()
function buttonTest() {
  alert("You pressed the sign in button");
}

// Syle 2 using click
var signin = document.getElementById("signin");
signin.addEventListener("click", function () {
  this.style = "background-color: teal";
});
