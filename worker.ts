// OpenNext generates this module during `bun run cf:build`.
// This entrypoint exports only the request handler. Durable Object lifecycle
// changes in wrangler.jsonc require a separate, explicitly reviewed deployment.
import handler from './.open-next/worker.js';

export default handler;
