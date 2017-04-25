import * as WebSocket from 'ws';
import { UserMessage } from './models';

const port: number = process.env.PORT || 3000;
const server = new WebSocket.Server({ port: port });

server.on('connection', ws => {
	console.log('new connection');
	ws.on('message', message => {
		try {
			const userMessage: UserMessage = new UserMessage(message);
			broadcast(JSON.stringify(userMessage));
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});
};

console.log('Server is running on port', port);
