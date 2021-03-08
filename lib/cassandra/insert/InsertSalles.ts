import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertSalles(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_SALLES.UNE_SALLE?.map(
      (salle) =>
        [
          salle.CODE,
          salle.NOM,
          salle.ALIAS,
          salle.COMMENTAIRE || "",
          salle.CODE_ZONE,
        ]
          .map((e) => `'${e}'`)
          .join(", ")
    ).map(
      (e) =>
        `INSERT INTO SALLES (CODE, NOM, ALIAS, COMMENTAIRE, CODE_ZONE) VALUES (${e})`
    ) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS SALLES (CODE TEXT, NOM TEXT, ALIAS TEXT, COMMENTAIRE TEXT, CODE_ZONE TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
