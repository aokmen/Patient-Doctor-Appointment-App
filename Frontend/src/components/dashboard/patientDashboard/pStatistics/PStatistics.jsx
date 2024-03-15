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
    <div className="h-[100vh] w-[87vw]">
      <div className="flex  max-h-[86vh] min-h-[86vh]">
        <div className="flex flex-col max-h-[86vh] min-h-[86vh]  max-w-[26vw] min-w-[26vw]">
          <div className="border-b-[1.9rem] border-[#F1F7FE] max-h-[50vh] min-h-[50vh] bg-white rounded-tl-3xl text-center">
            <div className=" min-h-[10vh] text-4xl font-bold flex justify-center items-center border-b-8 border-[#38638D]">
              <h1 className="text-[#38638D]">Meine Statistiken</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 ml-5 text-[#38638D]"
              >
                <path
                  fillRule="evenodd"
                  d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <AccordingToBranch />
          </div>
          <div className="max-h-[36vh] min-h-[36vh] rounded-bl-3xl bg-white">
            <CancelStats />
          </div>
        </div>
        <div className="flex flex-col border-l-[1.9rem] border-[#F1F7FE] max-h-[86vh] min-h-[86vh] max-w-[54vw] min-w-[54vw]">
          <div className="flex max-h-[50vh] min-h-[50vh] border-b-[1.9rem] rounded-tr-3xl border-[#F1F7FE] bg-white">
            <div className="max-w-[26vw] min-w-[26vw] border-r-[1.9rem] border-[#F1F7FE]">
              <TerminZahl />
            </div>
            <div className="">
              <MessageStats/>
            </div>
          </div>
          <div className="max-h-[36vh] min-h-[36vh] rounded-br-3xl bg-white">
            <UserStats/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PStatistics;