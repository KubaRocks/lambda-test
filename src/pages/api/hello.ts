import { logger } from "@app/logger/logger";

export const config = {
  runtime: "edge",
};

export default function handler() {
  logger.info("🚀 ~ file: hello.ts ~ line 8 ~ config", config);
  return new Response(
    JSON.stringify({
      name: process.env.NEXT_RUNTIME,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
