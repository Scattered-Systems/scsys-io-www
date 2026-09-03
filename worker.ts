// OpenNext generates this module during `bun run cf:build`.
// Keep the deployed entrypoint limited to the request handler so Cloudflare can
// create versioned preview URLs for non-production branch uploads.
// @ts-ignore The generated module does not exist before the OpenNext build.
import handler from './.open-next/worker.js';

export default handler;
