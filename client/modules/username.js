export class Username {
	constructor(selector) {
		this.node = document.querySelector(selector);
      this.render = this.render.bind(this)
	}
	render(value) {
		this.node.innerHTML = value;
	}
}
