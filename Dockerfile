FROM node:9

COPY . .

RUN npm install
RUN npm run build

CMD npm start
