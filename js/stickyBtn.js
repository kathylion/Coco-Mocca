/* Variables */
var arrowBtn = document.getElementById("arrow");

/* Función para mostrar el botón y al pulsar volver al inicio de la página */
window.onscroll = function(){
	var valorScroll = document.documentElement.scrollTop;
	scrollFunction();
}

function scrollFunction(){
	
	if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
		arrowBtn.style.display = "block";
	} else {
		arrowBtn.style.display = "none";
	}
}

function topFunction(){
	
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}