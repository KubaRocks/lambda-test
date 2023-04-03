import { createTRPCRouter } from "@app/server/api/trpc";
import { exampleRouter } from "@app/server/api/routers/example";
import * as console from "console";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
console.error("hello from src/server/api/root.ts");
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
