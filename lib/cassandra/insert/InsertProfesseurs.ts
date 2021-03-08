import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertProfesseurs(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_PROFESSEURS.UN_PROFESSEUR?.map(
      (prof) =>
        [prof.CODE, prof.NOM, prof.PRENOM, prof.ADRESSE.EMAIL || ""]
          .map((e) => `'${e}'`)
          .join(", ")
    ).map(
      (e) => `INSERT INTO PROFESSEURS (CODE, NOM, PRENOM, EMAIL) VALUES (${e})`
    ) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS PROFESSEURS (CODE TEXT, NOM TEXT, PRENOM TEXT, EMAIL TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
