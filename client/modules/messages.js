export class Messages {
	constructor(selector) {
		this.node = document.querySelector(selector);
	}
	render(username, message) {
		this.node.innerHTML += `<b>[${username}]</b> ${message}\n`;
	}
	renderSys(message) {
		this.node.innerHTML += `${message}\n`;
	}
}
