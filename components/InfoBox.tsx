import GroupContext from "@/contexts/GroupContext";
import { useContext } from "react";
import WrapperBox from "./WrapperBox";

const InfoBox: React.FC = () => {
  const { code, nom, type } = useContext(GroupContext);
  return (
    <WrapperBox>
      <span className="block font-bold font-display text-white text-2xl">
        Infos
      </span>
      <div className="flex justify-between mt-2 text-white">
        <span>Nom du {type === "ETUDIANT" ? "groupe" : "professeur"}</span>
        <span className="font-bold">{nom}</span>
      </div>
      <div className="flex justify-between text-white">
        <span>Code du {type === "ETUDIANT" ? "groupe" : "professeur"}</span>
        <span className="font-bold">{code}</span>
      </div>
    </WrapperBox>
  );
};

export default InfoBox;
