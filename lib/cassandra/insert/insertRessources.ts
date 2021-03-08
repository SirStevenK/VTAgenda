import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertRessources(): Promise<void> {
  const rows: string[] = [];
  (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_SEANCES.UNE_SEANCE.forEach(
    (seance) => {
      const code = seance.CODE;
      const enseignement = seance.ENSEIGNEMENT;
      if (Array.isArray(seance.LES_RESSOURCES.UNE_RESSOURCE)) {
        rows.push(
          ...(seance.LES_RESSOURCES.UNE_RESSOURCE?.map((ressource) =>
            [
              code,
              enseignement,
              ressource?.CODE_RESSOURCE,
              ressource?.TYPE || "Unknown",
            ]
              .map((e) => `'${e}'`)
              .join(", ")
          ).map(
            (e) =>
              `INSERT INTO RESSOURCES_SEANCES (SEANCE, ENSEIGNEMENT, CODE_RESSOURCE, TYPE) VALUES (${e})`
          ) || [])
        );
      } else if (seance.LES_RESSOURCES.UNE_RESSOURCE) {
        rows.push(
          `INSERT INTO RESSOURCES_SEANCES (SEANCE, ENSEIGNEMENT, CODE_RESSOURCE, TYPE) VALUES (${[
            code,
            enseignement,
            seance.LES_RESSOURCES.UNE_RESSOURCE.CODE_RESSOURCE,
            seance.LES_RESSOURCES.UNE_RESSOURCE.TYPE || "Unknown",
          ]
            .map((e) => `'${e}'`)
            .join(", ")})`
        );
      }
    }
  );

  await client.execute(
    `CREATE TABLE IF NOT EXISTS RESSOURCES_SEANCES (SEANCE TEXT, ENSEIGNEMENT TEXT, CODE_RESSOURCE TEXT, TYPE TEXT, PRIMARY KEY (SEANCE, CODE_RESSOURCE, TYPE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
