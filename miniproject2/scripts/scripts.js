let backgroundTransition = () => {
	let i = 0;
	let j = 0;
	setInterval(() => {
		j = i; i = (i + 1) % 6;
		replaceBackground(i, j);
	}, 3000);
	let replaceBackground = (i, j) => {
		document.body.style.backgroundImage = `url(images/background${i}.jpg), url(images/background${j}.jpg)`;
	}
}

