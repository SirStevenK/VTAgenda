import DateContext from "@/contexts/DateContext";
import GroupContext from "@/contexts/GroupContext";
import { GetDayInfoProps } from "@/types/api";
import AbortController from "abort-controller";
import { useCallback, useContext, useEffect, useState } from "react";
import SmallEvent from "./SmallEvent";
import WrapperBox from "./WrapperBox";

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const ViewSchedule: React.FC = () => {
  const [signal, setSignal] = useState<AbortController | null>(null);
  const { code, type } = useContext(GroupContext);
  const { selectedDate, setDate } = useContext(DateContext);
  const [classes, setClasses] = useState<GetDayInfoProps[]>([]);

  useEffect(() => {
    if (signal) signal.abort();
    const newSignal = new AbortController();

    setClasses([]);
    setSignal(newSignal);
    const url = `/api/getDayInfo?groupe=${code}&type=${type}&date=${selectedDate.getFullYear()}-${(
      selectedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${selectedDate.getDate().toString().padStart(2, "0")}`;
    fetch(url, {
      method: "GET",
      signal: newSignal.signal,
    })
      .then((res) => res.json())
      .then(setClasses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, selectedDate]);

  const setSelectedDay = useCallback(
    (day: number) => {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + day - selectedDate.getDay());
      setDate(newDate);
    },
    [selectedDate, setDate]
  );

  return (
    <WrapperBox className="h-full">
      <span className="block font-bold font-display text-white text-2xl text-center">
        Cours de la semaine
      </span>
      <div className="my-3">
        <div className="flex justify-evenly">
          {days.map((day, index) => (
            <span
              key={day}
              className={`text-sm sm:text-base text-center text-white cursor-pointer pb-1 ${
                selectedDate.getDay() - 1 === index
                  ? "border-b-2 border-white"
                  : ""
              }`}
              onClick={() => setSelectedDay((index + 1) % 7)}
            >
              {day}
            </span>
          ))}
        </div>
        <div className="space-y-3 mt-4">
          {classes.map((course, index) => (
            <SmallEvent key={index} course={course} />
          ))}
        </div>
      </div>
    </WrapperBox>
  );
};

export default ViewSchedule;
