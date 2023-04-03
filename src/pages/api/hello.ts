import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: 'edge',
}
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { name = "World" } = req.query;
  res.status(200).json({ name: "John Doe", greeting: `Hello ${name}!` });
}
