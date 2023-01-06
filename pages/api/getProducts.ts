// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  body: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if( req.method !== "GET") {
    res.status(405).json({ body: "Method not allowed"})
  }
  res.status(200).json({ name: 'John Doe' })
}
