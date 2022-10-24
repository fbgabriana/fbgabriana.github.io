let backgroundTransition = () => {
	window.addEventListener("load", (event) => {
		let img = [];
		for (let i = 0; i < 6; i++) {
			img[i] = new Image();
			img[i].src = `images/background${i}.jpg`;
		}
		setTimeout(() => {
			let i = 0;
			let j = 0;
			setInterval(() => {
				j = i; i = (i + 1) % 6;
				replaceBackground(i, j);
			}, 4000);

			let replaceBackground = (i, j) => {
				document.body.style.backgroundImage = `url(images/background${i}.jpg), url(images/background${j}.jpg)`;
			}
		}, 1000);
	})
}

