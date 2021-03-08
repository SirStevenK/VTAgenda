import DateContext from "@/contexts/DateContext";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import WrapperBox from "./WrapperBox";

type DateProps = {
  date: number;
  month: number;
  year: number;
};

function GetDaysInMonth(current_date: Date) {
  const before_days: DateProps[] = [];
  const after_days: DateProps[] = [];

  let date: Date = new Date(current_date);
  // complete before
  // eslint-disable-next-line no-constant-condition
  while (true) {
    date.setDate(date.getDate() - 1);
    if (date.getMonth() !== current_date.getMonth() && date.getDay() === 0)
      break;
    before_days.push({
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    });
  }

  date = new Date(current_date);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    date.setDate(date.getDate() + 1);
    if (date.getMonth() !== current_date.getMonth() && date.getDay() === 1)
      break;
    after_days.push({
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    });
  }
  return [
    ...before_days.reverse(),
    {
      date: current_date.getDate(),
      month: current_date.getMonth(),
      year: current_date.getFullYear(),
    },
    ...after_days,
  ].reduce<DateProps[][]>(
    (weeks, date) => {
      if (weeks[weeks.length - 1].length === 7) weeks.push([]);
      weeks[weeks.length - 1].push(date);
      return weeks;
    },
    [[]]
  );
}

const Days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const Months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const PickCalendar: React.FC = () => {
  const { selectedDate, setDate } = useContext(DateContext);
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());

  const weeks = useMemo(() => GetDaysInMonth(new Date(year, month, 1)), [
    year,
    month,
  ]);

  useEffect(() => {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
  }, [selectedDate]);

  const goPrevMonth = useCallback(() => {
    const newDate = new Date(year, month, 1);
    newDate.setMonth(newDate.getMonth() - 1);
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  }, [year, month]);

  const goNextMonth = useCallback(() => {
    const newDate = new Date(year, month, 1);
    newDate.setMonth(newDate.getMonth() + 1);
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  }, [year, month]);

  const setSelectedDate = useCallback(
    (date: Date) => {
      if (date.getDay() !== 0 && date.getDay() !== 6) setDate(new Date(date));
    },
    [setDate]
  );

  return (
    <WrapperBox>
      <div className="flex justify-between items-center px-2">
        <span className="font-bold font-display text-white text-2xl">{`${Months[month]} ${year}`}</span>
        <div className="flex space-x-2">
          <div
            className="flex justify-center items-center bg-secondary cursor-pointer"
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            onClick={goPrevMonth}
          >
            <i
              aria-hidden
              className="text-white far fa-angle-left text-2xl"
              style={{ marginLeft: "-3px", marginBottom: "-2px" }}
            />
          </div>
          <div
            className="flex justify-center items-center bg-secondary cursor-pointer"
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            onClick={goNextMonth}
          >
            <i
              aria-hidden
              className="text-white far fa-angle-right text-2xl"
              style={{ marginRight: "-3px", marginBottom: "-2px" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex">
          {Days.map((day) => (
            <span key={day} className="flex-1 text-center text-white">
              {day.substring(0, 3)}
            </span>
          ))}
        </div>
        {weeks.map((week, index) => (
          <div
            key={index}
            className={`flex ${
              week.find(
                (e) =>
                  e.date === selectedDate.getDate() &&
                  e.month === selectedDate.getMonth()
              ) && "bg-secondary bg-opacity-50"
            } rounded-lg`}
          >
            {week.map((date, index) => (
              <div
                key={date.date + "-" + date.month}
                className={`flex-1 flex justify-center items-center rounded-lg ${
                  selectedDate.getDate() === date.date &&
                  selectedDate.getMonth() === date.month
                    ? "bg-secondary"
                    : ""
                } ${
                  index > 4
                    ? "text-border cursor-default"
                    : month === date.month
                    ? "text-white cursor-pointer"
                    : "text-darkText cursor-pointer"
                }`}
                style={{ width: "36px", height: "36px" }}
                onClick={() =>
                  setSelectedDate(new Date(date.year, date.month, date.date))
                }
              >
                <span className="text-center">{date.date}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </WrapperBox>
  );
};

export default PickCalendar;
