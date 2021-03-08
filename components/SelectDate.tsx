const SelectDate: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-2 text-black">
      <i
        className="fas fa-angle-left cursor-pointer"
        style={{ fontSize: "1.6rem", marginBottom: "-5px" }}
        aria-hidden
      />
      <span className="font-display font-bold" style={{ fontSize: "1.6rem" }}>
        Feb 8 - Feb 14
      </span>
      <i
        className="fas fa-angle-right cursor-pointer"
        style={{ fontSize: "1.6rem", marginBottom: "-5px" }}
        aria-hidden
      />
    </div>
  );
};

export default SelectDate;
