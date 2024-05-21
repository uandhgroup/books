# Used only for preview builds

FROM node:20-alpine

ENV release_mode="staging"

ENV BUILD_VERSION="2.0"

#WORKDIR /app
WORKDIR /app

# Bundle app source
COPY . .

RUN yarn

RUN yarn build

CMD ["yarn", "run", "serve", "-p", "8080", "--host", "0.0.0.0"]