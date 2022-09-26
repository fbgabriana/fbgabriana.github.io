function toggleNavBar() {
	menu = document.getElementsByTagName("nav")[0];
	menu.style.display = (menu.style.display == "none") ? "flex" : "none";
	resizeNavBar();
}

function resizeNavBar() {
	body = document.getElementsByTagName("body")[0];
	menu = document.getElementsByTagName("nav")[0];
	menuheight = (window.innerWidth <= 640) ? "102px" : "26px";
	if (menu.style.display == "none") {
		body.style.gridTemplateRows = "60px auto 60px";
	}
	else {
		body.style.gridTemplateRows = "60px " + menuheight + " auto 60px";
	}
}

window.onresize = function() {
	resizeNavBar();
}

