################################################################################
# Use volta as the base image
FROM marcaureln/volta:2.0.1-slim AS base

WORKDIR /app

ENV NODE_ENV=production

# Copy package.json for volta to install the correct node version
COPY package.json .

################################################################################
# Create a stage for building the application
FROM base AS builder

COPY yarn.lock .

RUN yarn install --frozen-lockfile && \
    yarn cache clean

COPY . .

RUN yarn build

################################################################################
# Create a stage for running the application
FROM base AS runner

COPY --from=builder /app/.output .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server/index.mjs"]