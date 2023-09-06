FROM node:16.14-alpine

RUN npm install -g npm@8.5.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]