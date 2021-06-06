### STAGE 1: Build ###
FROM trion/ng-cli as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json package.json
COPY package-lock.json package-lock.json
USER node
RUN npm ci  --debug
COPY --chown=node:node . .
RUN ng build --configuration=kproduction


### STAGE 2: RUN ###
FROM nginx:1.17.5
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/app/dist/prueba-full-stack-walmart-app /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'