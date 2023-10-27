# production environment
FROM node:14.15.1 as builder


WORKDIR /home/node/app/
COPY ./package.json /home/node/app/
RUN npm install
COPY . /home/node/app/
RUN npm run build build

# production environment
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html/

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/node/app/build  /usr/share/nginx/html/
COPY --from=builder /home/node/app/letsencrypt  /etc/nginx/ssl/live/localhost

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 
