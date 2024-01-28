import React from 'react'
import loadingGif from "../../assets/loading.gif"
const Loading = () => {
  return (
    <div className=" text-[white] flex  justify-center flex-col h-screen" > 
        <div className=' mx-auto my-0 '><img src={loadingGif} alt="loadingGif" /></div>
        <div className=' mx-auto my-0  text-[50px] '> <p >Loading</p> </div>
       
    </div>
  )
}

export default Loading