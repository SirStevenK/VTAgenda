const Event: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md border border-primary overflow-hidden">
      <span className="bg-primary text-white font-body text-xs lg:text-sm xl:text-base">
        CM 8:30 - 10:00
      </span>
      <span className="font-bold font-body text-xs lg:text-sm">BADA</span>
      <span className="font-body text-xs lg:text-sm xl:text-base">
        Courtaud
      </span>
      <span className="font-body text-xs xl:text-sm">
        Salle : IBGBI - 1 - 106
      </span>
    </div>
  );
};

export default Event;
