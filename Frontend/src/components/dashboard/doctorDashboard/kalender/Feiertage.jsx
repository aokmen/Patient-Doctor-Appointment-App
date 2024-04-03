import React, { useEffect } from "react";
import { getGermanHolidays } from "../uberblick/HolidayService";

const Feiertage = ({ setHolidays, holidayArray }) => {
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const holidayData = await getGermanHolidays();
        setHolidays(holidayData);
        console.log("holidayData:",holidayData);
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    // fetchHolidays();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="overflow-scroll max-h-[20vh] min-h-[20vh] ml-8 ">
      <table className="mt-5 text-start text-main-dark-blue dark:text-white min-w-[27rem] max-w-[27rem] wrap mx-auto">
        {holidayArray.map((item) => {
          return (
            <>
              <tr>
                <th className="text-main-panel-backgrounds dark:text-white border dark:border-white">
                  {item.date.iso}
                </th>
              </tr>
              <tr className="flex justify-center items-center border dark:border-white">
                <td className="py-1 px-2 border-r-2 dark:border-white">{item.name}</td>
                <td className="pl-2">
                  {item.states !== "All"
                    ? item.states?.map((stat) => {
                        return <>{stat.name},</>;
                      })
                    : "Alle Länder"}
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Feiertage;