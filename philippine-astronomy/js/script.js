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
const addColorSwitcher = (selector) => {
	if (! window.matchMedia ) return;
	if (! (CSS && CSS.supports("color-scheme", "light")) ) return;

	const selectorElement = document.querySelector(selector);
	if (selectorElement) {
		const media_colorswitcher = window.matchMedia("(prefers-color-scheme: light)");
		const link_colorswitcher = document.querySelector("link[href$='colors.css']");
		const checkbox_colorswitcher = document.createElement("input");
		const label_colorswitcher = document.createElement("label");
		const meta_colorswitcher = document.createElement("meta");
		const link_href = link_colorswitcher.getAttribute("href");

		checkbox_colorswitcher.type = "checkbox";
		checkbox_colorswitcher.id = "colorswitcher_checkbox";
		checkbox_colorswitcher.className = "colorswitcher";
		label_colorswitcher.id = "colorswitcher_label";
		label_colorswitcher.className = "colorswitcher";
		label_colorswitcher.innerText = "Toggle Night Mode";
		label_colorswitcher.htmlFor = checkbox_colorswitcher.id;
		meta_colorswitcher.setAttribute("name", "color-scheme");

		selectorElement.appendChild(checkbox_colorswitcher);
		selectorElement.appendChild(label_colorswitcher);
		document.head.appendChild(meta_colorswitcher);

		const logotext = document.querySelector("header h1 a img");
		const menubtn = document.querySelector("#menubtn");
		const favicon = document.querySelector("link[rel='icon']");

		const set_colorscheme = () => {
			let colorscheme = media_colorswitcher.matches ^ checkbox_colorswitcher.checked ? "light" : "dark";
			link_colorswitcher.href = link_href.replace(".css", `-${colorscheme}.css`);
			checkbox_colorswitcher.dataset.colorscheme = colorscheme;
			label_colorswitcher.dataset.colorscheme = colorscheme;
			document.documentElement.style.colorScheme = colorscheme;
			meta_colorswitcher.content = colorscheme;
			logotext.src = `../svg/${colorscheme}/logotext.svg`;
			menubtn.src  = `../svg/${colorscheme}/menu.svg`;
			favicon.href = `../svg/${colorscheme}/favicon.svg`;
			localStorage.setItem("checkbox_colorswitcher", checkbox_colorswitcher.checked);
		}
		checkbox_colorswitcher.checked = (localStorage.getItem("checkbox_colorswitcher") == "true");
		set_colorscheme();

		media_colorswitcher.addEventListener("change", event => {
			set_colorscheme();
		});

		checkbox_colorswitcher.addEventListener("change", event => {
			set_colorscheme();
			if (navigator.vibrate) navigator.vibrate(5);
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
	addColorSwitcher("footer p.copyright");
});

