import DateContext from "@/contexts/DateContext";
import { useCallback, useContext, useMemo } from "react";
import { Months } from "@/components/PickCalendar";

const InfoBar: React.FC = () => {
  const { selectedDate, setDate } = useContext(DateContext);

  const leftDate = useMemo(() => {
    const leftDate = new Date(selectedDate);
    leftDate.setDate(leftDate.getDate() - selectedDate.getDay() + 1);
    return `${Months[leftDate.getMonth()].substring(
      0,
      3
    )} ${leftDate.getDate()}, ${leftDate.getFullYear()}`;
  }, [selectedDate]);

  const rightDate = useMemo(() => {
    const rightDate = new Date(selectedDate);
    rightDate.setDate(rightDate.getDate() + 7 - selectedDate.getDay());
    return `${Months[rightDate.getMonth()].substring(
      0,
      3
    )} ${rightDate.getDate()}, ${rightDate.getFullYear()}`;
  }, [selectedDate]);

  const goPrevWeek = useCallback(() => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 7);
    setDate(newDate);
  }, [selectedDate, setDate]);

  const goNextWeek = useCallback(() => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 7);
    setDate(newDate);
  }, [selectedDate, setDate]);

  return (
    <div
      className="flex border-2 border-border bg-white rounded-md"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <div
        className="cursor-pointer px-3 border-border border-r-2 flex justify-center items-center"
        onClick={goPrevWeek}
      >
        <i
          aria-hidden
          className="fas fa-caret-left text-2xl text-darkText"
          style={{ marginBottom: "-3px" }}
        />
      </div>
      <span className="font-display font-bold text-center text-lg flex-1 py-1 text-darkText uppercase">
        {leftDate} - {rightDate}
      </span>
      <div
        className="cursor-pointer px-3 border-border border-l-2 flex justify-center items-center"
        onClick={goNextWeek}
      >
        <i
          aria-hidden
          className="fas fa-caret-right text-2xl text-darkText"
          style={{ marginBottom: "-3px" }}
        />
      </div>
    </div>
  );
};

export default InfoBar;
