import React, { useState, useEffect, useRef } from "react";
import send from "../../../../assets/send-email.png";
import trash from "../../../../assets/logout.png";
import click from "../../../../assets/ok2.png";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const PTask = ({ id }) => {
    const { getData, delData, postData } = useDataCall();
    const { tasks } = useSelector((state) => state.data);

    const [newTask, setNewTask] = useState(""); // Yeni task girişi için state

    const handleDeleteTask = (id) => {
        delData("tasks",id)
    }

    useEffect(() => {
        getData("tasks")
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newTask) {
            const newTaskData = {
                userId: id,
                task: newTask
            };
            postData("tasks", newTaskData);
            getData("tasks")
            setNewTask("")
        }
        

    }

    return (
        <div className="container m-6 mr-3 py-6 border-0 bg-white h-[75vh] rounded-l-3xl">
            <div className="max-w-md md:flex-shrink-0  ">
                <div className=" text-main-dark-blue py-4 ">
                    <h3 className="text-3xl font-bold mx-4">Meine Aufgaben</h3>
                </div>
                <div className="p-2 ">
                    <div className="flex flex-col border-2 rounded-lg border-main-light-blue2 py-10">
                        <form action="" id="p-taskForm" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                className=" bg-transparent   text-main-dark-blue mr-2 py-5 px-2 leading-tight focus:outline-none"
                                placeholder="Add Task"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="flex-shrink-0 flex w-full justify-center items-center gap-3 mt-6 mb-[-40px] h-[50px] bg-main-light-blue2 hover:bg-main-light-blue2 border-main-light-blue2 hover:border-main-light-blue2 text-[20px] font-normal border-4 text-main-dark-blue  rounded"
                            >
                                {" "}
                                <img src={send} alt="send" />
                                Aufgabe hinzufügen
                            </button>
                        </form>
                    </div>

                    <div>
                        {tasks.map((task, index) => (
                            <div
                                key={index}
                                className={`flex mb-4 mt-2 items-center bg-main-light-blue  hover:bg-[white] hover:text-white border-2 rounded-lg border-main-light-blue2 cursor-pointer ${task.isCompleted ? "line-through" : ""
                                    }`}
                            >
                                <span className="font-medium text-2xl text-main-dark-blue border-1 border-main-light-blue2 rounded-md p-3 px-3 bg-main-light-blue2 mr-3">
                                    {index + 1}.
                                </span>{" "}
                                {/* Burada index + 1 ile her task'ı numaralandırıyoruz */}
                                <button
                                    className="text-main-dark-blue   flex-1 text-left ml-5"

                                >
                                    <img
                                        src={click}
                                        alt="click"
                                        className="ml-[250px] mb-[-25px] items-center "
                                    />
                                    {task.task}
                                </button>
                                <button
                                    className="flex-shrink-0  border-transparent border-4 text-sm py-1 px-2 rounded"
                                 onClick={()=> handleDeleteTask(task.id)}   
                                >
                                    <img src={trash} alt="trash" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PTask;
