# Build Phase 1
#
# Define common image for multi-phased build
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk update


# Build Phase 2
FROM base AS builder
ARG APP_NAME_TO_DEPLOY
WORKDIR /app

COPY . .

ENV rush='node /app/common/scripts/install-run-rush.js'
RUN $rush install --to $APP_NAME_TO_DEPLOY
RUN $rush build --to $APP_NAME_TO_DEPLOY
RUN $rush deploy

# Build Phase 3
FROM base AS runner
ARG APP_PATH_TO_DEPLOY

ENV NODE_ENV production

COPY --from=builder /app/common/deploy /deploy
WORKDIR /deploy/$APP_PATH_TO_DEPLOY

ENV PORT 3000

EXPOSE 3000
CMD ["npm", "start"]

