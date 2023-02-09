# Build stage
FROM node:16 as build
WORKDIR /src
COPY . ./

RUN corepack enable
RUN yarn install --immutable

ENV FOXGLOVE_DISABLE_SIGN_IN=true
RUN yarn run web:build:prod

# Release stage
FROM caddy:2.5.2-alpine
WORKDIR /src
COPY --from=build /src/web/.webpack ./
COPY ./Default.json ./
COPY ./RosbotTeleop.json ./

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
# CMD ["caddy", "file-server", "--listen", ":8080"]

# disable cache
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
