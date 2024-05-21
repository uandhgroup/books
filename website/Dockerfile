# Used only for preview builds

FROM node:20-alpine

ENV release_mode="staging"

ENV BUILD_VERSION="2.0"

#WORKDIR /app
WORKDIR /website

# Bundle app source
COPY . .


RUN yarn build

EXPOSE 3000 

CMD ["yarn", "serve"]