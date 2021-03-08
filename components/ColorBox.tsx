import WrapperBox from "./WrapperBox";

const ColorBox: React.FC = () => {
  return (
    <WrapperBox>
      <span className="block font-bold font-display text-white text-2xl">
        Codes Couleurs
      </span>
      <div className="mt-2">
        <div className="flex items-center text-white space-x-2">
          <div className="bg-special_cm border border-background rounded-sm w-6 h-3" />
          <span className="flex-1">CM</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <div className="bg-special_td border border-background rounded-sm w-6 h-3" />
          <span className="flex-1">TD</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <div className="bg-special_tp border border-background rounded-sm w-6 h-3" />
          <span className="flex-1">TP</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <div className="bg-special_other border border-background rounded-sm w-6 h-3" />
          <span className="flex-1">DS/Examen</span>
        </div>
      </div>
    </WrapperBox>
  );
};

export default ColorBox;
