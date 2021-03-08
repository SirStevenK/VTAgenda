import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertEnseignements(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_ENSEIGNEMENTS.UN_ENSEIGNEMENT?.map(
      (enseignement) =>
        [
          enseignement.CODE,
          enseignement.NOM,
          enseignement.ALIAS || "",
          enseignement.TYPE_ACTIVITE,
        ]
          .map((e) => `'${e}'`)
          .join(", ")
    ).map(
      (e) =>
        `INSERT INTO ENSEIGNEMENTS (CODE, NOM, ALIAS, TYPE_ACTIVITE) VALUES (${e})`
    ) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS ENSEIGNEMENTS (CODE TEXT, NOM TEXT, ALIAS TEXT, TYPE_ACTIVITE TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
