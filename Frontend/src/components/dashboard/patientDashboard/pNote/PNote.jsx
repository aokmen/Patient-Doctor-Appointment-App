import React, { useState, useEffect, useRef } from "react";
import send from "../../../../assets/send-email.png";
import trash from "../../../../assets/logout.png";
import click from "../../../../assets/ok2.png";
import { useSelector } from "react-redux";
import useDataCall from "../../../../hooks/useDataCall";

const PNote = ({ id }) => {
    const { getData, delData, postData } = useDataCall();
    const { notes } = useSelector((state) => state.data);

    const [newNote, setNewNote] = useState(""); // Yeni note girişi için state

    const handleDeletenote = (id) => {
        delData("notes",id)
    }

    useEffect(() => {
        getData("notes")
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newNote) {
            const newNoteData = {
                userId: id,
                note: newNote
            };
            postData("notes", newNoteData);
            getData("notes")
            setNewNote("")
        }
        

    }

    return (
        <div className="container m-6 mr-3 py-6 border-0 bg-white h-[75vh] rounded-l-3xl">
            <div className="max-w-md md:flex-shrink-0  ">
                <div className=" text-main-dark-blue py-4 ">
                    <h3 className="text-3xl font-bold mx-4">Meine Notizen</h3>
                </div>
                <div className="p-2 ">
                    <div className="flex flex-col border-2 rounded-lg border-main-light-blue2 py-10">
                        <form action="" id="p-noteForm" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                className=" bg-transparent   text-main-dark-blue mr-2 py-5 px-2 leading-tight focus:outline-none"
                                placeholder="Add note"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="flex-shrink-0 flex w-full justify-center items-center gap-3 mt-6 mb-[-40px] h-[50px] bg-main-light-blue2 hover:bg-main-light-blue2 border-main-light-blue2 hover:border-main-light-blue2 text-[20px] font-normal border-4 text-main-dark-blue  rounded"
                            >
                                {" "}
                                <img src={send} alt="send" />
                                Notizen hinzufügen
                            </button>
                        </form>
                    </div>

                    <div>
                        {notes.map((note, index) => (
                            <div
                                key={index}
                                className={`flex mb-4 mt-2 items-center bg-main-light-blue  hover:bg-main-light-blue2 border-2 rounded-lg border-main-light-blue2 cursor-pointer ${note.isCompleted ? "line-through" : ""
                                    }`}
                            >
                                <span className="font-medium text-2xl text-main-dark-blue border-1 border-main-light-blue2 rounded-md p-3 px-3 bg-main-light-blue2 mr-3">
                                    {index + 1}.
                                </span>{" "}
                                {/* Burada index + 1 ile her note'ı numaralandırıyoruz */}
                                <button
                                    className="text-main-dark-blue   flex-1 text-left ml-5"

                                >
                                    <img
                                        src={click}
                                        alt="click"
                                        className="ml-[250px] mb-[-25px] items-center "
                                    />
                                    {note.note}
                                </button>
                                <button
                                    className="flex-shrink-0  border-transparent border-4 text-sm py-1 px-2 rounded"
                                 onClick={()=> handleDeletenote(note.id)}   
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

export default PNote;
