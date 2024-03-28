import useDataCall from "../../../../hooks/useDataCall";
import AccordingToBranch from "./AccordingToBranch";
import CancelStats from "./CancelStats";
import { useEffect } from "react";
import TerminZahl from "./TerminZahl";
import MessageStats from "./MessageStats";
import UserStats from "./UserStats";

const PStatistics = () => {
  const { getData } = useDataCall();

  useEffect(() => {
    getData("doctors");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

      <div className="p-statistic h-[87vh] flex gap-10 justify-center mt-[-25px]">
        <div className="p-statistic-left">
          <div className="p-statistic-left1 pl-20 bg-white w-[500px] h-[410px] mb-10 align-items-center"><AccordingToBranch/></div>
          <div className="p-statistic-left2 pl-20 bg-white w-[500px] h-[410px]"><CancelStats/></div>
        </div>
        <div className="p-statistic-right">
          <div className="p-statistic-right1 flex gap-10 mb-10 ">
            <div className="p-statistic-right1-1 bg-white w-[500px] h-[410px]"><TerminZahl/></div>
            <div className="p-statistic-right1-2 bg-white w-[500px] h-[410px]"><MessageStats/></div>
          </div>
          <div className="p-statistic-right2 w-[99%]  h-[410px] "><UserStats/></div>
        </div>
      </div>

  );
};

export default PStatistics;
