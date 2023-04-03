import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: 'edge',
}
export default function hello(req: NextApiRequest, res: NextApiResponse) {
  const { name = "World" } = req.query;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  res.status(200).json({ name: "John Doe", greeting: `Hello ${name}!` });
}
