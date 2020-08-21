FROM node:alpine

WORKDIR /var/simple-webapp

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]