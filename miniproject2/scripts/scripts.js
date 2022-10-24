let backgroundTransition = () => {
	window.addEventListener("load", (event) => {
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
				document.querySelector(".boost").innerHTML = benefits[i];
				console.log(benefits[i]);
			}
		}, 1000);
	})
}
