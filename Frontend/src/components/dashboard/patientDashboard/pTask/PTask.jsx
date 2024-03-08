import React, { useState, useEffect, useRef } from "react";
import "./pTask.css";
import send from "../../../../assets/send.png";
import trash from "../../../../assets/trash.png";
import click from "../../../../assets/click.png";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const PTask = () => {
  const { getSingleData, delData, postData, putData } = useDataCall();
  const { tasks } = useSelector((state) => state.data);
  const { userId } = useSelector((state) => state.auth);

  const inputRef = useRef(null); // useRef kullanarak input alanını referanslayın
  const [newTask, setNewTask] = useState(""); // Yeni Task girişi için state
  const [completedTasks, setCompletedTasks] = useState([]);


  const handleDeleteTask = (id) => {
    delData("tasks", id);
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTask) {
      const newTaskData = {
        userId: userId,
        task: newTask,
      };
      postData("tasks", newTaskData);
      setNewTask("");
    }
  };

  const handleTaskClick = (task) => {
    putData("tasks", task.id, { ...task, isCompleted: !task.isCompleted });
    window.location.reload();
  };

  const isTaskCompleted = (taskId) => completedTasks.includes(taskId);

  const handleChange = () => {
    // Her karakter girişinde setState yerine input değerini güncelleyin
    setNewTask(inputRef.current.value);
  };

  return (
    <div className="task-main container flex justify-center mr-4 h-[825px] bg-white rounded-l-3xl ">
      <div>
        <div className=" text-main-dark-blue py-4">
          <h3 className="text-3xl font-bold mx-4">Meine Aufgabe</h3>
        </div>
        <div className="p-2 flex flex-col justify-center w-[650px] ">
          <div className="flex flex-col border-2 rounded-lg border-main-light-blue2 py-10 mb-[15px] ">
            <form action="" id="p-taskForm" onSubmit={handleSubmit}>
              <input
                ref={inputRef} // Referansı input elementine atayın
                type="text"
                className=" bg-transparent w-[630px] text-main-dark-blue mr-2 py-5 px-2 leading-tight focus:outline-none"
                placeholder="Add Task"
                value={newTask}
                onChange={handleChange} // Değişikliklerde handleChange'i çağırın
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

          <div className=" task-main-add ">
            {tasks?.map((task, index) => (
              <div
                key={index}
                className="flex mb-4 align-content-center justify-center border-2 w-[630px]  bg-main-light-blue  hover:bg-[white] hover:text-white rounded-lg border-main-light-blue2 cursor-pointer "
              >
                <span className={`font-medium flex-1 text-2xl text-main-dark-blue border-1 border-main-light-blue2 rounded-md p-3 px-4 bg-main-light-blue2 mr-3 w-full ${task.isCompleted || isTaskCompleted(task.id)
                    ? "bg-[#B7D8F8] text-gray-50"
                    : ""
                  }`} >
                  {index + 1}.
                </span>{" "}
                <div className="my-auto"> 
                  <button
                    className={`text-main-dark-blue w-[520px] flex justify-between my-auto ${task.isCompleted || isTaskCompleted(task.id)
                        ? "line-through"
                        : ""
                      }`}
                    onClick={() => handleTaskClick(task)}
                  >
                    <div className="flex justify-between w-[600px] ">
                      <p className=" w-[500px] text-left">{task.task}</p>
                      <img src={click} alt="click" className="w-6 h-6 my-auto"/>
                    </div>
                  </button>
                </div> 
                <button
                  className="flex-shrink-0 flex-2 border-transparent border-4 text-sm py-1 px-2 rounded"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <img src={trash} alt="trash" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTask;
