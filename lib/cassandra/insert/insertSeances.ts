import original from "@/data/original.json";
import { ORIGINAL } from "@/types/index";
import { client } from "../DBClient";

export async function InsertSeances(): Promise<void> {
  const rows =
    (original as ORIGINAL).DATA_VISUAL_TIMETABLING.LES_SEANCES.UNE_SEANCE.map(
      (seance) => {
        let professeur = "";
        let salle = "";
        if (Array.isArray(seance.LES_RESSOURCES.UNE_RESSOURCE)) {
          professeur =
            seance.LES_RESSOURCES.UNE_RESSOURCE.find((e) => e.TYPE === "PROF")
              ?.CODE_RESSOURCE || "";
          salle =
            seance.LES_RESSOURCES.UNE_RESSOURCE.find((e) => e.TYPE === "SALLE")
              ?.CODE_RESSOURCE || "";
        } else if (seance.LES_RESSOURCES.UNE_RESSOURCE) {
          if (seance.LES_RESSOURCES.UNE_RESSOURCE.TYPE === "PROF")
            professeur = seance.LES_RESSOURCES.UNE_RESSOURCE.CODE_RESSOURCE;
          else if (seance.LES_RESSOURCES.UNE_RESSOURCE.TYPE === "SALLE")
            salle = seance.LES_RESSOURCES.UNE_RESSOURCE.CODE_RESSOURCE;
        }
        return [
          seance.CODE,
          seance.ENSEIGNEMENT,
          seance.DATE,
          seance.HEURE,
          seance.DUREE,
          professeur,
          salle,
        ]
          .map((e) => `'${e}'`)
          .join(", ");
      }
    ).map(
      (e) =>
        `INSERT INTO SEANCES (CODE, ENSEIGNEMENT, DATE, HEURE, DUREE, PROF, SALLE) VALUES (${e})`
    ) || [];

  await client.execute(
    `CREATE TABLE IF NOT EXISTS SEANCES (CODE TEXT, ENSEIGNEMENT TEXT, DATE DATE, HEURE TEXT, DUREE TEXT, PROF TEXT, SALLE TEXT, PRIMARY KEY (CODE));`
  );

  for (const row of rows) {
    await client.execute(row);
  }
}
