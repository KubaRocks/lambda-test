// import { createNextApiHandler } from "@trpc/server/adapters/next";

// import { createTRPCContext } from "@app/server/api/trpc";
// import { appRouter } from "@app/server/api/root";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "edge",
};

// export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext: createTRPCContext,
//   onError: ({ path, error }) => {
//     console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
//   },
// });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(appRouter);
  // console.log(createTRPCContext);
  // console.log(createNextApiHandler);

  res.status(200).json({
    name: process.env.NEXT_RUNTIME,
    config,
  });
}
