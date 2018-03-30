## TypeScript/WebSocket Chat Server ##

This is a very straight forward chat server (no persistence) that is meant to be
used with the companion project [typeScriptChatClient](https://github.com/nprice1/typeScriptChatClient).

### Usage ###

1. Clone the repository.
2. Run `npm install` then run `npm run build`.
3. Run `npm start`  

That's it! You should have a server listening on port 3000. See the [typeScriptChatClient](https://github.com/nprice1/typeScriptChatClient)
project for instructions on how to connect to the server and start chatting.

### Docker Compose Application ###

The docker compose file in this project can be used to start a full chat application including the chat server, the 
chat client, a prometheus and grafana instance for application monitoring, and a "chaos" application to send some 
garbage data to the server. To start the full application, follow these steps:

1. Build a docker image for the [typeScriptChatClient](https://github.com/nprice1/typeScriptChatClient) application by 
running `docker build . -t chat_client:v1.0.0` in the root directory of the repo. 
2. Build a docker image for this project by running `docker build . -t chat_server:v1.0.0` in the root directory of 
this repo. 
3. Run `docker-compose up` to start the application. 
4. The chat client can be accessed by visiting `http://localhost:8080`, the Prometheus service can be accessed by 
visiting `http://localhost:9090`, and the Grafana service can be accessed by visiting `http://localhost:3001`. 