let setBackground = () => {

	const d0 = new Date();

	const getFrameNumber = () => {
		let d1 = new Date();
		return Math.floor( ( d1.getTime() - d0.getTime() ) / 4000 ) % 6;
	}

	const getColorScheme = () => {
		return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "-dark" : "";
	}

	const changeFrame = () => {
		f = getFrameNumber();
		s = getColorScheme();
		// console.log(f, s);
	}

	const currentColorScheme = "";
	setInterval(checkSchemeChange = () => {
		if (currentColorScheme != getColorScheme()) {
			console.log(`scheme changed to ${getColorScheme()}`);
		}
	}, 100);

	setInterval(rotateFrames = () => {
		changeFrame();
	}, 4000);

	let preloadImages = () => {
		let img1 = []; let img2 = [];
		for (let i = 0; i < 6; i++) {
			img1[i] = new Image(); img2[i] = new Image();
			img1[i].src = `images/background${i}.jpg`;
			img2[i].src = `images/background${i}-dark.jpg`;
		}
	}
	preloadImages();

	if (location.href.includes("home.html")) {
		let s = getColorScheme();
		document.body.style.backgroundImage = `url(images/background0${s}.jpg), url(images/background${s}.jpg)`;

		let benefits = ["marketability online", "growth opportunities", "competitiveness", "market expansion", "consumer services", "your credibility"];

		let replaceBackground = (i, j) => {
			let s = getColorScheme();
			document.body.style.backgroundImage = `url(images/background${i}${s}.jpg), url(images/background${j}${s}.jpg)`;
		}
		let replaceText = i => {
			let boost = document.querySelector(".boost");
			if (boost) document.querySelector(".boost").childNodes[0].nodeValue = benefits[i];
		}

		setTimeout(waitForPreload = () => {
			let i = 0;
			let j = 0;
			setInterval(setNewFrame = () => {
				j = i; i = (i + 1) % 6;
				replaceBackground(i, j);
				replaceText(i);
			}, 4000);
		}, 1000);
	}

	setInterval(() => {
		let s = getColorScheme();
		if (location.href.includes("about.html")) {
			document.body.style.backgroundImage = `url(images/background1${s}.jpg), url(images/background${s}.jpg)`;
		}
		if (location.href.includes("projects.html")) {
			document.body.style.backgroundImage = `url(images/background3${s}.jpg), url(images/background${s}.jpg)`;
		}
		if (location.href.includes("contact.html")) {
			document.body.style.backgroundImage = `url(images/background4${s}.jpg), url(images/background${s}.jpg)`;
		}
	}, 100);
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

