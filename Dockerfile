FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install  # Ensure all root dependencies are installed
RUN pnpm run build:woodpecker-plugins  # Build the plugins
RUN pnpm run build  # Build the main project

EXPOSE 3000
CMD ["pnpm", "serve"]