// Philippine Astronomy Magazine

const toggleMenuBar = () => {
	let menubar = document.getElementById("menubar");
	if (menubar.style.display == "none") {
		menubar.style.display = "block";
	}
	else {
		menubar.style.display = "none";
	}
}

const windowResize = () => {
	let menubar = document.getElementById("menubar");
	let menubtn = document.getElementById("menubtn");
	let heading = document.querySelector("h1");
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

const setDocumentTitle = () => {
	let websiteTitleElement = document.querySelector("h1 a img");
	let articleTitleElement = document.querySelector("article h2");
	document.title = websiteTitleElement.alt + ": " + articleTitleElement.innerHTML;
	websiteTitleElement.parentElement.title = "Back to Home";
}

const setCurrentPage = () => {
	let a = document.querySelectorAll("a");
	let currentLocation = location.href.replace("index.html","");
	for (i=0; i<a.length; i++) {
		if (a[i].href == currentLocation) {
			a[i].classList.add("current-page");
			a[i].removeAttribute("href");
			a[i].removeAttribute("title");
		}
		if (currentLocation.includes(a[i].href)) {
			a[i].classList.add("current-section");
		}
	}
}

const watchColorScheme = () => {
	let mediaQueryList = window.matchMedia("(prefers-color-scheme: light)");
	let rootElement = document.documentElement;
	rootElement.dataset.colorscheme = mediaQueryList.matches ? "light" : "dark";
	mediaQueryList.addEventListener("change", event => {
		rootElement.dataset.colorscheme = event.target.matches ? "light" : "dark";
	});
}

window.addEventListener("load", event => {
	windowResize();
});

window.addEventListener("resize", event => {
	windowResize();
});

window.addEventListener("DOMContentLoaded", event => {
	setDocumentTitle();
	setCurrentPage();
	watchColorScheme();
});

