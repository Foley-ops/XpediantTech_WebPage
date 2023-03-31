FROM node:lts as node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80

CMD [ "npm", "start" ]
