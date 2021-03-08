import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertGroupes(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_GROUPES.UN_GROUPE?.map(
      (groupe) =>
        [groupe.CODE, groupe.NOM, groupe.ALIAS].map((e) => `'${e}'`).join(", ")
    ).map((e) => `INSERT INTO GROUPES (CODE, NOM, ALIAS) VALUES (${e})`) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS GROUPES (CODE TEXT, NOM TEXT, ALIAS TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
