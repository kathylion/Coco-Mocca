/* Variables */
var navbar = document.getElementById("navbar");

/* Función para hacer la nav bar responsive con el menu hamburguesa */
function navBar() {

  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  }else {
    navbar.className = "navbar";
  }

}