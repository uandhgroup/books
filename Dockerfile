FROM node:lts as builder
WORKDIR /app
COPY . .
RUN yarn install  # Ensure all root dependencies are installed
RUN yarn run build:woodpecker-plugins  # Build the plugins
RUN yarn run build  # Build the main project


EXPOSE 3000
CMD ["yarn", "serve"]