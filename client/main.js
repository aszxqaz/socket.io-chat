import { Messages } from './modules/messages.js';
import { Socket } from './modules/socket.js';
import { Username } from './modules/username.js';
import { MessageForm } from './modules/message-form.js';

document.addEventListener('DOMContentLoaded', () => {
	const username = new Username('#username');
	const messages = new Messages('#messages');
	const messageForm = new MessageForm('#messageForm');
	const socket = new Socket();

	socket.onSetUsername((name) => {
		username.render(name);
		messages.renderSys(`${name} assigned to you.`);
	});
	socket.onUserJoined((name) => {
		messages.renderSys(`${name} joined.`);
	});
	socket.onUserLeft((name) => {
		messages.renderSys(`${name} left.`);
	});
	messageForm.onSubmit(socket.emitChatMessage);
   
	socket.onMessageReceived(({ author, message }) => {
		messages.render(author, message);
	});
});
