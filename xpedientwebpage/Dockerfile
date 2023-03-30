FROM node:lts as node
WORKDIR /app
COPY . .
EXPOSE 80
RUN npm install && npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/website /usr/share/nginx/html