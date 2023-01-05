const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')

const fs = require("fs");
const util = require("util");
fs.readFile = util.promisify(fs.readFile).bind(fs);

fs.readFile("template.html", "utf8").then(html => {
	const parser = new DOMParser();
	let document = parser.parseFromString(html, 'text/html');
	let content = document.getElementById("content");
	console.log(content)
});

