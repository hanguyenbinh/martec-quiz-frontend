FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
