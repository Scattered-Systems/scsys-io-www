ARG BUN_VERSION=1

# base image used by all stages
FROM oven/bun:${BUN_VERSION} AS builder-base

WORKDIR /usr/src/app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_BUILD_OUTPUT="standalone"

# === Install all dependencies (cached unless package files change) ===
FROM builder-base AS deps
# make the installation of dependencies a separate step to leverage Docker caching
RUN mkdir -p /tmp/dev
# copy package files to temp directory for dependency installation
COPY package.json bun.lock* /tmp/dev/
# change directories and install dependencies with bun
RUN cd /tmp/dev && \
    bun install --frozen-lockfile || bun install

# === Install production dependencies only ===
FROM builder-base AS install
# create a temporary directory for production dependencies
RUN mkdir -p /tmp/prod
# copy package files to temp directory for production install
COPY package.json bun.lock* /tmp/prod/
# install production dependencies only
RUN cd /tmp/prod && \
    bun install --production --frozen-lockfile || bun install --production

# === Build the Next.js app ===
FROM builder-base AS builder
# configure environment variables for the build process
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_BUILD_OUTPUT="standalone"
# copy dependencies from the deps stage to the builder stage
COPY --from=deps /tmp/dev/node_modules ./
# copy source files to the builder stage
COPY . .
# build the workspace / app
RUN bun run build

# === Runtime ===
FROM oven/bun:${BUN_VERSION}-alpine AS runner

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_SITE_URL="http://localhost:3000" \
    NEXT_PUBLIC_SUPABASE_URL="https://gilqgzjkzkmhbbcqidqb.supabase.co" \
    HOSTNAME="0.0.0.0" \
    PORT=3000

# Create non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 ausr

WORKDIR /app

# Ensure prerender cache directory exists and is writable
RUN mkdir -p build && \
    chown ausr:appgroup build && \
    chmod 755 build

# Copy build artifacts from the app workspace
COPY --from=builder --chown=ausr:appgroup /usr/src/app/apps/tips/public ./public
COPY --from=builder --chown=ausr:appgroup /usr/src/app/apps/tips/build/standalone ./
COPY --from=builder --chown=ausr:appgroup /usr/src/app/apps/tips/build/static ./build/static

# Copy production node_modules
COPY --from=install --chown=ausr:appgroup /tmp/prod/node_modules ./node_modules

USER ausr
EXPOSE 3000/tcp
CMD ["bun", "run", "server.js"]
