var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 3000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}

	// função para trocar cor da bolinhas selecionadas
	var bolinhas = document.getElementsByClassName("bolinha");
	for (var i = 0; i < bolinhas.length; i++) {
		bolinhas[i].style.backgroundColor = "#133656";
	}
	bolinhas[slideItem].style.backgroundColor = "#ffe049";
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	
	// função para trocar cor da bolinhas selecionadas
	var bolinhas = document.getElementsByClassName("bolinha");
	for (var i = 0; i < bolinhas.length; i++) {
		bolinhas[i].style.backgroundColor = "#133656";
	}
	bolinhas[slideItem].style.backgroundColor = "#ffe049";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	
	// função para trocar cor da bolinhas selecionadas
	var bolinhas = document.getElementsByClassName("bolinha");
	for (var i = 0; i < bolinhas.length; i++) {
		bolinhas[i].style.backgroundColor = "#133656";
	}
	bolinhas[slideItem].style.backgroundColor = "#ffe049";
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}


