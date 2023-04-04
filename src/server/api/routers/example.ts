import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@app/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text ?? "world"}`,
      };
    }),
});
