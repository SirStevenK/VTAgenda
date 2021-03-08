import styled from "@emotion/styled";
import colors from "@/styles/colors.json";
import fontFamily from "@/styles/fontFamily.json";
import Event from "./Event";

const TableWrapper = styled.table({
  "th,td": {
    border: `1px solid ${colors.light}`,
    fontSize: "1.1rem",
  },
  th: {
    fontFamily: fontFamily.display.join(","),
  },
  td: {
    fontFamily: fontFamily.body.join(","),
    padding: "10px",
  },
});

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

const Calendar: React.FC = () => {
  return (
    <div className="px-2 lg:px-8 xl:px-12 mt-4">
      <TableWrapper className="bg-white w-full rounded-md border border-collapse border-primary">
        <thead>
          <tr>
            <th className="text-black">Horaires</th>
            {days.map((day, index) => (
              <th key={day}>
                <span className="block text-black">{day}</span>
                <span
                  className="block text-black font-bold text-2xl pb-2"
                  style={{ lineHeight: "1.1rem" }}
                >
                  {index + 8}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-black">8:30</th>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
          </tr>
          <tr>
            <th className="text-black">10:00</th>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
          </tr>
          <tr>
            <th className="text-black">13:00</th>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
          </tr>
          <tr>
            <th className="text-black">14:30</th>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
          </tr>
          <tr>
            <th className="text-black">16:00</th>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
            <td className="text-center">
              <Event />
            </td>
          </tr>
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default Calendar;
