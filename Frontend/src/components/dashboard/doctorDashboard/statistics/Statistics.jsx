import useDataCall from "../../../../hooks/useDataCall";
import CancelStats from "./CancelStats";
import GenderStats from "./GenderStats";
import Sypmtome from "./Sypmtome";
import TerminZahl from "./TerminZahl";
import WeeklyNumber from "./WeeklyNumber";
import { useEffect } from "react";


const Statistics = () => {
    const { getData } = useDataCall();

    useEffect(() => {
      getData("patients");

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  return (


    <div className="p-statistic h-[88vh] flex gap-10 justify-center mt-[-25px]">
        <div className="p-statistic-left">
          <div className="p-statistic-left1 pl-20 bg-white w-[500px] h-[410px] mb-10 align-items-center"> <GenderStats/></div>
          <div className="p-statistic-left2 pl-20 bg-white w-[500px] h-[410px]"><CancelStats/></div>
        </div>
        <div className="p-statistic-right">
          <div className="p-statistic-right1 flex gap-10 mb-10 ">
            <div className="p-statistic-right1-1 bg-white w-[500px] h-[410px]"><TerminZahl/></div>
            <div className="p-statistic-right1-2 bg-white w-[500px] h-[410px]"><Sypmtome/></div>
          </div>
          <div className="p-statistic-right2 w-[99%]  bg-white h-[410px] "><WeeklyNumber/></div>
        </div>
      </div>
  );
}

export default Statistics