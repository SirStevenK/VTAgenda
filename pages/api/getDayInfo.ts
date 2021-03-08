import { TypeData } from "@/contexts/GroupContext";
import { client } from "@/lib/cassandra/DBClient";
import { GetDayInfoProps } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const date = req.query.date;
  const groupe = req.query.groupe;
  const type = req.query.type;

  if (
    req.method === "GET" &&
    typeof groupe === "string" &&
    typeof date === "string" &&
    typeof type === "string" &&
    date.length > 0 &&
    groupe.length > 0 &&
    type.length > 0
  ) {
    const listGroupeSeances = await client
      .execute(
        `SELECT SEANCE FROM RESSOURCES_SEANCES WHERE TYPE='${
          (type as TypeData) === "ETUDIANT" ? "GROUPE" : "PROF"
        }' AND CODE_RESSOURCE='${groupe}' ALLOW FILTERING`
      )
      .then((res) => res.rows);

    const listDaySeances = await client
      .execute(`SELECT * FROM SEANCES WHERE DATE='${date}' ALLOW FILTERING`)
      .then((res) => res.rows);

    const joinSeances = listDaySeances.filter(({ code }) =>
      listGroupeSeances.map((e) => e.seance).includes(code)
    );

    const professeurs = await client
      .execute(
        `SELECT CODE, NOM FROM PROFESSEURS WHERE CODE IN (${joinSeances
          .filter((e) => e.prof.length > 0)
          .map((e) => `'${e.prof}'`)
          .join(", ")}) ALLOW FILTERING`
      )
      .then((res) => res.rows);

    const salles = await client
      .execute(
        `SELECT CODE, NOM FROM SALLES WHERE CODE IN (${joinSeances
          .filter((e) => e.salle.length > 0)
          .map((e) => `'${e.salle}'`)
          .join(", ")}) ALLOW FILTERING`
      )
      .then((res) => res.rows);

    const enseignements = await client
      .execute(
        `SELECT CODE, NOM, TYPE_ACTIVITE FROM ENSEIGNEMENTS WHERE CODE IN (${joinSeances
          .map((e) => `'${e.enseignement}'`)
          .join(", ")}) ALLOW FILTERING`
      )
      .then((res) => res.rows);

    const result = joinSeances
      .map<GetDayInfoProps>((element) => ({
        date: element.date,
        duree:
          Math.floor(Number(element.duree) / 100) * 60 +
          (Number(element.duree) % 100),
        enseignement:
          enseignements.find(({ code }) => code === element.enseignement)
            ?.nom || "unknown",
        heure:
          Math.floor(Number(element.heure) / 100) * 60 +
          (Number(element.heure) % 100),
        professeur:
          professeurs.find(({ code }) => code === element.prof)?.nom || "",
        salle: salles.find(({ code }) => code === element.salle)?.nom || "",
        type_activite:
          enseignements.find(({ code }) => code === element.enseignement)
            ?.type_activite || "1",
      }))
      .sort((a, b) => a.heure - b.heure);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.send({ response: false });
  }
};
