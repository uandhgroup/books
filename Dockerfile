# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /app
# Stage 2a: Development mode.
FROM base as dev
## Set the working directory to `/opt/docusaurus`.
WORKDIR /app
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD [ -d "node_modules" ] && pnpm start --host 0.0.0.0 --poll 1000 || pnpm install && pnpm start --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /app
## Copy over the source code.
COPY . /app
## Install dependencies with `--frozen-lockfile` to ensure reproducibility.
RUN pnpm install --frozen-lockfile
## Build the static site.
RUN pnpm build

# Stage 3a: Serve with `docusaurus serve`.
FROM prod as serve
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the production server.
CMD ["pnpm", "serve", "--host", "--", "0.0.0.0", "--no-open"]