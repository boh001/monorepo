FROM node:16 as base
WORKDIR /usr/src/myapp
COPY .yarn .yarn
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY .yarnrc.yml .yarnrc.yml
COPY .pnp.cjs .pnp.cjs
COPY .pnp.loader.mjs .pnp.loader.mjs


#########################
# build container
#########################

FROM base AS build-container

COPY packages/container packages/container
RUN yarn workspace container run build

#########################
# build landing
#########################

FROM base AS build-landing

COPY packages/landing packages/landing
RUN yarn workspace landing run build

###################
# final image
###################

FROM nginx:stable

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build-container /usr/src/myapp/packages/container/dist /usr/share/nginx/html/container/latest
COPY --from=build-landing /usr/src/myapp/packages/landing/dist /usr/share/nginx/html/landing/latest
CMD nginx -g 'daemon off;'