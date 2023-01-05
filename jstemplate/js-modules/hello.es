export const hello = text => {
	const div = document.createElement(`div`);
	div.textContent = `Hello ${text}`;
	return document.body.appendChild(div).innerText;
}

