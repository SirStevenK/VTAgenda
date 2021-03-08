import React from "react";

type DateContextProps = {
  selectedDate: Date;
  setDate: (date: Date) => void;
};

const DateContext = React.createContext<DateContextProps>({
  selectedDate: new Date(),
  setDate: () => null,
});

export default DateContext;
