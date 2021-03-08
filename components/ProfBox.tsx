import WrapperBox from "./WrapperBox";

const ProfBox: React.FC = () => {
  return (
    <WrapperBox>
      <span className="block font-bold font-display text-white text-2xl">
        Professeurs
      </span>
      <div className="mt-2">
        <div className="flex justify-between items-center text-white">
          <span>Devauchelle Claudine</span>
          <i className="cursor-pointer fas fa-at" aria-hidden />
        </div>
        <div className="flex justify-between items-center text-white">
          <span>Vassiere Nicolas</span>
          <i className="cursor-pointer fas fa-at" aria-hidden />
        </div>
      </div>
    </WrapperBox>
  );
};

export default ProfBox;
