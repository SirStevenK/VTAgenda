import React from "react";

export type TypeData = "ETUDIANT" | "PROFESSEUR";

type GroupContextProps = {
  code: string;
  nom: string;
  type: TypeData;
};

const GroupContext = React.createContext<GroupContextProps>({
  code: "",
  nom: "",
  type: "ETUDIANT",
});

export default GroupContext;
