import { client } from "@/lib/cassandra/DBClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const code = req.query.code as string;
  if (req.method === "GET" && typeof code === "string" && code.length > 0) {
    const professeurs = await client
      .execute(`SELECT * FROM PROFESSEURS WHERE CODE='${code}'`)
      .then((res) => res.rows);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(professeurs);
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.send({ response: false });
  }
};
