import * as WebSocket from 'ws';

const socket: WebSocket = new WebSocket("ws://server:3000");

for (let i=1; i <= 10; i++) {
    setTimeout(() => {
        socket.send('garbage');
    }, i * 1000);
}