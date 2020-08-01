### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: RUN ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/prueba-full-stack-walmart-app /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'