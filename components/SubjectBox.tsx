import WrapperBox from "./WrapperBox";

const SubjectBox: React.FC = () => {
  return (
    <WrapperBox>
      <span className="block font-bold font-display text-white text-2xl">
        Matières et Professeurs
      </span>
      <div className="flex flex-col my-2 text-white space-y-2">
        <div>
          <span className="font-bold">Anglais</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
        <div>
          <span className="font-bold">Biologie Animale</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
        <div>
          <span className="font-bold">Biologie Animale</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
        <div>
          <span className="font-bold">Biologie Animale</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
        <div>
          <span className="font-bold">Biologie Animale</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
        <div>
          <span className="font-bold">Biologie Animale</span>
          <div className="flex justify-between items-center text-white ml-2">
            <span>Devauchelle Claudine</span>
            <i className="cursor-pointer fas fa-at" aria-hidden />
          </div>
        </div>
      </div>
    </WrapperBox>
  );
};

export default SubjectBox;
