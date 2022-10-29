window.addEventListener("load", event => {
	for (section of document.querySelectorAll("main section")) {
		section.style.display = "none";
	}
	let content = document.getElementById("content");
	content.style.display = "block";
	for (a of document.querySelectorAll("header nav a")) {
		a.addEventListener("click", event => {
			event.preventDefault();
			let target = document.querySelector(event.target.hash);
			content.innerHTML = target.innerHTML;
		});
	}
	content.innerHTML = document.querySelector("#work").innerHTML;
});

