const include = src => {
	const head = document.querySelector(`head`);
	const scripts = head.getElementsByTagName(`script`);
	const script = document.createElement(`script`);
	script.src = src;
	document.insertBefore(script, scripts[0]);
	console.log(script)
}

