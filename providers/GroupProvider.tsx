import Logo from "@/components/Logo";
import GroupContext, { TypeData } from "@/contexts/GroupContext";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useCallback, useState } from "react";

const GroupProvider: React.FC = ({ children }) => {
  const [inputCode, setInputCode] = useState("");
  const [type, setType] = useState<TypeData>("ETUDIANT");
  const [code, setCode] = useState("");
  const [nom, setNom] = useState("");
  const [ready, setReady] = useState(false);

  const searchGroups = useCallback(() => {
    axios
      .get(
        `/api/${type === "ETUDIANT" ? "getGroups" : "getProfs"}?code=` +
          inputCode
      )
      .then((res) => res.data)
      .then((groups) => {
        if (groups.length > 0) {
          setNom(groups[0].nom);
          setCode(groups[0].code);
          setReady(true);
        } else alert("Mauvais code");
      });
  }, [inputCode, type]);

  if (!ready)
    return (
      <>
        <NextSeo title="VT-Agenda" />
        <div className="min-h-screen flex justify-center items-center px-4">
          <div className="bg-main px-4 pt-2 rounded-xl overflow-hidden shadow-MAIN border-2 border-border">
            <div className="mx-auto flex justify-center">
              <Logo />
            </div>
            <div className="mb-2">
              <form
                className="flex flex-col items-center"
                onSubmit={(e) => {
                  searchGroups();
                  e.preventDefault();
                }}
              >
                <label className="flex flex-col bg-light border-2 border-primary text-primary rounded-md px-2 pb-1 font-bold font-display">
                  Code du {type === "ETUDIANT" ? "groupe" : "professeur"}
                  <input
                    style={{ background: "none" }}
                    type="text"
                    className="outline-none text-black font-body"
                    onChange={(e) => setInputCode(e.currentTarget.value)}
                    value={inputCode}
                  />
                </label>
                <input
                  className="cursor-pointer mt-2 bg-white border-2 border-primary text-primary font-display font-bold px-4 rounded-md text-lg"
                  type="submit"
                  value="Valider"
                />
              </form>
            </div>
            <div className="text-primary mb-1 text-center">
              Version {type === "ETUDIANT" ? "Étudiant" : "Professeur"} -{" "}
              <span
                className="font-bold cursor-pointer select-none"
                onClick={() =>
                  setType((prevValue) =>
                    prevValue === "ETUDIANT" ? "PROFESSEUR" : "ETUDIANT"
                  )
                }
              >
                Accéder à la version{" "}
                {type === "ETUDIANT" ? "professeur" : "étudiant"}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <GroupContext.Provider value={{ code, nom, type }}>
        {children}
      </GroupContext.Provider>
    );
};

export default GroupProvider;
