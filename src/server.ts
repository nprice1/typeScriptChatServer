import * as WebSocket from 'ws';
import * as http from 'http';
import { UserMessage } from './models';

const port: number = 3000;
const metricsPort: number = 8081;
const server: WebSocket.Server = new WebSocket.Server({ port: port });
const metricsServer: http.Server = http.createServer(requestHandler);

let connections: number = 0;
let errorCount: number = 0;

server.on('connection', ws => {
	console.log('new connection');
	connections++;
	ws.on('message', message => {
		try {
			const userMessage: UserMessage = new UserMessage(message);
			broadcast(JSON.stringify(userMessage));
		} catch (e) {
			console.error(e.message);
			errorCount++;
		}
	});
});

metricsServer.listen(metricsPort, (err: Error) => {
	if (err) {
	  return console.log('something bad happened', err);
	}
  
	console.log(`server is listening on ${metricsPort}`);
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});
};

function requestHandler(request: http.IncomingMessage, response: http.ServerResponse): void {
	response.end(`connections ${connections}\nerror_count ${errorCount}`);
}

console.log('Server is running on port', port);
