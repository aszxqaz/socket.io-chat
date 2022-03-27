export class MessageForm {
	constructor(selector) {
		this.node = document.querySelector(selector);
		this.input = this.node.querySelector('input');
	}
	onSubmit(handler) {
		this.node.addEventListener('submit', (e) => {
			e.preventDefault();
			if (this.input.value) {
				handler(this.input.value);
				this.input.value = '';
			}
		});
	}
}
