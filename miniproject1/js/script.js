// Philippine Astronomy Magazine

function toggleMenuBar() {
	var menubar = document.getElementById("menubar");
	if (menubar.style.display == "none") {
		menubar.style.display = "block";
	}
	else {
		menubar.style.display = "none";
	}
}

function windowResize() {
	var menubar = document.getElementById("menubar");
	var menubtn = document.getElementById("menubtn");
	var heading = document.getElementsByTagName("h1")[0];
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

function setDocumentTitle() {
	var heading = document.getElementsByTagName("article")[0].getElementsByTagName("h2")[0];
	document.title = "Philippine Astronomy: " + heading.innerHTML;
}

function setCurrentPage() {
	var a = document.getElementsByTagName("a");
	var currentLocation = location.href.replace("index.html","");
	for (i=0; i<a.length; i++) {
		if (a[i].href == currentLocation) {
			a[i].classList.add("current-page");
			a[i].href = "javascript:void(0)";
		}
		if (currentLocation.includes(a[i].href)) {
			a[i].classList.add("current-section");
			console.log(a[i].href);
		}
	}
}

window.onload = function() {
	windowResize();
	setDocumentTitle();
	setCurrentPage();
}

window.onresize = function() {
	windowResize();
}

