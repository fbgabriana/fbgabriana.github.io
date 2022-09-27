// Philippine Astronomy Magazine

function toggleMenuBar() {
	menubar = document.getElementById("menubar");
	if (menubar.style.display == "none") {
		menubar.style.display = "block";
	}
	else {
		menubar.style.display = "none";
	}
}

function windowResize() {
	menubar = document.getElementById("menubar");
	menubtn = document.getElementById("menubtn");
	heading = document.getElementsByTagName("h1")[0];
	if (window.innerWidth <= 500) {
		heading.style.fontSize = window.innerWidth / 192 + "rem";
		menubar.style.display = "none";
		menubtn.style.display = "block";
		menubtn.style.width = heading.style.fontSize;
		menubtn.style.height = heading.style.fontSize;
		menubtn.style.top = (heading.offsetHeight - menubtn.offsetHeight) / 2 * 1.1 + "px";
	}
	else {
		heading.style.fontSize = "3rem";
		menubar.style.display = "block";
		menubtn.style.display = "none";
	}
}

window.onload = function() {
	windowResize();
}

window.onresize = function() {
	windowResize();
}

