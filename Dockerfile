FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN yarn 
RUN npm install -g pnpm

COPY . .

#replace with multistage build
RUN yarn build 

EXPOSE 3000 

CMD ["yarn", "serve"]