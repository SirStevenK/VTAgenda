import { GetDayInfoProps } from "@/types/api";
import { useMemo } from "react";

type Props = {
  course: GetDayInfoProps;
};

function GetHourString(hour: number) {
  const left = Math.floor(hour / 60).toString();
  const right = (hour % 60).toString().padStart(2, "0");
  return `${left}:${right}`;
}

const SmallEvent: React.FC<Props> = ({
  course: { duree, enseignement, heure, professeur, salle, type_activite },
}) => {
  const color = useMemo(() => {
    if (type_activite === "1") return "special_cm";
    else if (type_activite === "2") return "special_td";
    else if (type_activite === "3") return "special_tp";
    else if (type_activite === "9") return "special_other";
    else if (type_activite === "46") return "special_other";
    else return "special_cm";
  }, [type_activite]);
  const type = useMemo(() => {
    if (type_activite === "1") return "CM";
    else if (type_activite === "2") return "TD";
    else if (type_activite === "3") return "TP";
    else if (type_activite === "9") return "DS";
    else if (type_activite === "46") return "Examen";
    else return "";
  }, [type_activite]);

  return (
    <div
      className={`flex flex-col rounded-md border border-${color} bg-white overflow-hidden`}
      style={{ boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.4)" }}
    >
      <span className={`bg-${color} text-white font-body text-center`}>
        {`${type} ${GetHourString(heure)} - ${GetHourString(heure + duree)}`}
      </span>
      <span className="font-bold font-body text-center px-1">
        {enseignement}
      </span>
      <span className="font-body text-center">{professeur || <br />}</span>
      <span className="font-body text-center text-sm">Salle : {salle}</span>
    </div>
  );
};

export default SmallEvent;
