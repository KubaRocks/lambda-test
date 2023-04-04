import pino, { type DestinationStream } from "pino";
import { logflarePinoVercel } from "pino-logflare";
import { env } from "@app/env.mjs";

// create pino-logflare console stream for serverless functions and send function for browser logs
// Browser logs are going to: https://logflare.app/sources/13989
// Vercel log drain was setup to send logs here: https://logflare.app/sources/13830

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const { stream, send } = logflarePinoVercel({
  apiKey: env.LOGFLARE_API_KEY,
  sourceToken: env.LOGFLARE_TOKEN,
});
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

// create pino logger
export const logger = pino(
  {
    browser: {
      transmit: {
        level: "info",
        send: send,
      },
    },
    level: "debug",
    base: {
      env: env.NODE_ENV,
    },
  },
  stream as DestinationStream
);
