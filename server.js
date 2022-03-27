import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/////////////////////////////////////////////////
import express, { static as stat } from 'express';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import { createServer } from 'http';
import Moniker from 'moniker';
import eventNames from './commons/eventNames.js';
/////////////////////////////////////////////////
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
/////////////////////////////////////////////////
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});

app.use(stat('./client'));
app.use(stat('.'));

io.on('connection', (socket) => {
	socket.username = Moniker.choose();
	socket.emit(eventNames.SET_USERNAME, socket.username);
	socket.broadcast.emit(eventNames.USER_JOINED, socket.username);

	socket.on('disconnect', () => {
		socket.broadcast.emit(eventNames.USER_LEFT, socket.username);
	});

	socket.on(eventNames.CHAT_MESSAGE, (message) => {
		io.emit(eventNames.CHAT_MESSAGE, { author: socket.username, message });
	});
});

httpServer.listen(port, () => {
	console.log('listening on *:' + port);
});
