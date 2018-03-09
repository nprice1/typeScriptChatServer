FROM node:9

WORKDIR /home/

COPY src/ src/
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm install
RUN npm run build

CMD npm start
