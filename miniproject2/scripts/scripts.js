let setBackground = () => {
	if (location.href.includes("home.html") || location.href.includes("template.html")) {
		document.body.style.backgroundImage = `url(images/background0.jpg), url(images/background.jpg)`;
		let img = [];
		for (let i = 0; i < 6; i++) {
			img[i] = new Image();
			img[i].src = `images/background${i}.jpg`;
		}
		let benefits = ["marketability online", "growth opportunities", "competitiveness", "market expansion", "consumer services", "your credibility"];
		setTimeout(() => {
			let i = 0;
			let j = 0;
			setInterval(() => {
				j = i; i = (i + 1) % 6;
				replaceBackground(i, j);
				replaceText(i);
			}, 4000);

			let replaceBackground = (i, j) => {
				document.body.style.backgroundImage = `url(images/background${i}.jpg), url(images/background${j}.jpg)`;
			}
			let replaceText = i => {
				document.querySelector(".boost").childNodes[0].nodeValue = benefits[i];
			}
		}, 1000);
	}
	if (location.href.includes("about.html")) {
		document.body.style.backgroundImage = `url(images/background1.jpg), url(images/background.jpg)`;
	}
	if (location.href.includes("projects.html")) {
		document.body.style.backgroundImage = `url(images/background3.jpg), url(images/background.jpg)`;
	}
	if (location.href.includes("contact.html")) {
		document.body.style.backgroundImage = `url(images/background4.jpg), url(images/background.jpg)`;
	}
}

let setCurrentPage = () => {
	var a = document.querySelectorAll("a");
	var currentLocation = location.href.replace("index.html","");
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

window.addEventListener("load", event => {
	setCurrentPage();
	setBackground();
});

