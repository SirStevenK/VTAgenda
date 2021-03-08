import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertSallesZone(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_ZONES_DE_SALLES.UNE_ZONE_DE_SALLE?.map(
      (zone) =>
        [zone.CODE, zone.NOM, zone.ALIAS].map((e) => `'${e}'`).join(", ")
    ).map((e) => `INSERT INTO ZONES_SALLES (CODE, NOM, ALIAS) VALUES (${e})`) ||
    [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS ZONES_SALLES (CODE TEXT, NOM TEXT, ALIAS TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
