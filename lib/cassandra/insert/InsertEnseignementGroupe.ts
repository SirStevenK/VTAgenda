import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertEnseignementGroupe(): Promise<void> {
  const rows: string[] = [];
  (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_ENSEIGNEMENTS.UN_ENSEIGNEMENT?.forEach(
    (enseignement) => {
      const code_enseignement = enseignement.CODE;
      if (Array.isArray(enseignement.LES_RESSOURCES?.UNE_RESSOURCE)) {
        rows.push(
          ...(enseignement.LES_RESSOURCES?.UNE_RESSOURCE?.filter(
            (ressource) => ressource.TYPE === "GROUPE"
          )
            .map((ressource) =>
              [code_enseignement, ressource.CODE_RESSOURCE]
                .map((e) => `'${e}'`)
                .join(", ")
            )
            .map(
              (e) =>
                `INSERT INTO ENSEIGNEMENT_GROUPE (ENSEIGNEMENT, GROUPE) VALUES (${e})`
            ) || [])
        );
      } else if (
        enseignement.LES_RESSOURCES?.UNE_RESSOURCE?.TYPE === "GROUPE"
      ) {
        rows.push(
          `INSERT INTO ENSEIGNEMENT_GROUPE (ENSEIGNEMENT, GROUPE) VALUES (${[
            code_enseignement,
            enseignement.LES_RESSOURCES?.UNE_RESSOURCE?.CODE_RESSOURCE,
          ]
            .map((e) => `'${e}'`)
            .join(", ")})`
        );
      }
    }
  );

  await client.execute(
    `CREATE TABLE IF NOT EXISTS ENSEIGNEMENT_GROUPE (ENSEIGNEMENT TEXT, GROUPE TEXT, PRIMARY KEY (ENSEIGNEMENT, GROUPE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
