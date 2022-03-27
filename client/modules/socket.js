import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';
import eventNames from '../../commons/eventNames.js';

export class Socket {
	constructor() {
		this.socket = io();
	}
	onSetUsername(handler) {
		this.socket.on(eventNames.SET_USERNAME, handler);
	}
	onUserJoined(handler) {
		this.socket.on(eventNames.USER_JOINED, handler);
	}
	onUserLeft(handler) {
		this.socket.on(eventNames.USER_LEFT, handler);
	}
	emitChatMessage(message) {
		this.socket.emit(eventNames.CHAT_MESSAGE, message);
	}
	onMessageReceived(handler) {
		this.socket.on(eventNames.CHAT_MESSAGE, handler);
	}
}
   