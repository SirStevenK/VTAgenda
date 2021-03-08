import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function insertMatieres(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_MATIERES.UNE_MATIERE?.map(
      (matiere) =>
        [matiere.CODE, matiere.NOM, matiere.ALIAS || ""]
          .map((e) => `'${e}'`)
          .join(", ")
    ).map((e) => `INSERT INTO MATIERES (CODE, NOM, ALIAS) VALUES (${e})`) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS MATIERES (CODE TEXT, NOM TEXT, ALIAS TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
