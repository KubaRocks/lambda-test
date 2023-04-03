import { createNextApiHandler } from "@trpc/server/adapters/next";

// import { env } from "@app/env.mjs";
import { createTRPCContext } from "@app/server/api/trpc";
import { appRouter } from "@app/server/api/root";

export const config = {
  runtime: "nodejs",
};

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError: ({ path, error }) => {
    console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
  },
  /*
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
  */
});
