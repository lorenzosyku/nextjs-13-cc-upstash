// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import redis from "../../redis";

type Data = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method not allowed" });
  }

  const message = req.body;
  const id = uuid();

  const newEntry = {
    id,
    ...message,
    created_at: Date.now(),
  };

  //console.log(newEntry);

  //console.log("message", message);
  await redis.hset('products', id, JSON.stringify(newEntry))

  res.status(200).json({ body: "Success!" });
}
