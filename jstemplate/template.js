class HTMLTemplate {
	constructor(path) {
		this.path = path;
		this.selector = "";
	}
	loadContent() {
		fetch(this.path).then(response => {
			return response.text();
		}).then(string => {
			let parser = new DOMParser();
			this.document = parser.parseFromString(string, "text/html");
			this.document.querySelector(this.selector).replaceWith(document.querySelector(this.selector));
			this.document.title = `${this.document.title} — ${document.title}`;
			document.documentElement.replaceWith(this.document.documentElement);
		}).catch(error => {  
			console.log(error);  
		});
	}
}

if (typeof window === "object") window.addEventListener("DOMContentLoaded", event => {
	let template = new HTMLTemplate("template.html");
	template.selector = "#content";
	template.loadContent();
});

