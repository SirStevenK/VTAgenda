import { client } from "@/lib/cassandra/DBClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    const result = await client
      .execute(`SELECT * FROM PROFESSEURS`)
      .then((res) => res.rows);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.send({ response: false });
  }
};
