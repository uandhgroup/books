FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN pnpm  

COPY . .

#replace with multistage build
RUN pnpm build 

EXPOSE 3000 

CMD ["pnpm", "serve"]