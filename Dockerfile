FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.23.1
COPY --from=builder /app/build/ /usr/share/nginx/html
