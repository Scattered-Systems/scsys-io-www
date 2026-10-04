ARG NODE_VERSION=24.19.0
ARG BUN_VERSION=1.3.10

FROM oven/bun:${BUN_VERSION} AS bun
FROM node:${NODE_VERSION}-bookworm-slim AS builder

WORKDIR /usr/src/app
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
ENV NODE_ENV=production \
    NEXT_PUBLIC_BUILD_OUTPUT=standalone
RUN bun run build

FROM node:${NODE_VERSION}-bookworm-slim AS runner

WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

COPY --from=builder --chown=node:node /usr/src/app/public ./public
COPY --from=builder --chown=node:node /usr/src/app/.next/standalone ./
COPY --from=builder --chown=node:node /usr/src/app/.next/static ./.next/static
RUN mkdir -p .next/cache && chown -R node:node .next/cache

USER node
EXPOSE 3000/tcp
CMD ["node", "server.js"]
