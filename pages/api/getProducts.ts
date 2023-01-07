// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";

type ErrorData = {
  body: string;
};

type Data = {products:Product[]};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "GET") {
    res.status(405).json({ body: "Method not allowed" });
  }

  const productsRes = await redis.hvals("products");
  const products: Product[] = productsRes
    .map((product) => JSON.parse(product))
    .sort((a, b) => a.created_at - b.created_at);
  console.log(products);
  res.status(200).json( {products} );
}
