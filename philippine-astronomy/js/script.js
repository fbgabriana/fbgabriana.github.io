// Philippine Astronomy Magazine

const toggleMenuBar = () => {
	let menubar = document.getElementById("menubar");
	menubar.style.display = menubar.style.display == "none" ? "block" : "none";
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
	for (i = 0; i < a.length; i++) {
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
const watch_colormode = (colormode) => {
	const element = document.querySelector("footer p.copyright");
	if (element) {
		const media_colormode = window.matchMedia("(prefers-color-scheme: light)");
		const link_colormode = document.querySelector("link[href='../css/colors.css']");
		const checkbox_colormode = document.createElement("input");
		const label_colormode = document.createElement("label");

		checkbox_colormode.type = "checkbox";
		checkbox_colormode.id = "watch_colormode_checkbox";
		label_colormode.htmlFor = "watch_colormode_checkbox";

		element.appendChild(checkbox_colormode);
		element.appendChild(label_colormode);

		const logotext = document.querySelector("header h1 a img");
		const menubtn = document.querySelector("#menubtn");
		const favicon = document.querySelector("link[rel='icon']");

		const set_colormode = (colormode) => {
			colormode = colormode || (media_colormode.matches ? "dark" : "light");
			link_colormode.href = "../css/" + (checkbox_colormode.checked ? `colors-${colormode}.css` : "colors.css");
			label_colormode.innerText = `To ${colormode} mode`;
			label_colormode.dataset.colormode = colormode;
			colorstyle = !media_colormode.matches ^ checkbox_colormode.checked ? "dark" : "light";
			logotext.src = `../svg/${colorstyle}/logotext.svg`;
			menubtn.src  = `../svg/${colorstyle}/menu.svg`;
			favicon.href = `../svg/${colorstyle}/favicon.svg`;
			localStorage.setItem("checkbox_colormode", checkbox_colormode.checked);
		}
		checkbox_colormode.checked = (localStorage.getItem("checkbox_colormode") == "true");
		set_colormode(colormode);

		media_colormode.addEventListener("change", event => {
			set_colormode(colormode);
		});

		checkbox_colormode.addEventListener("change", event => {
			set_colormode(colormode);
		});
	}
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
	watch_colormode();
});

