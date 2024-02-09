import React, { useState } from 'react'
import ContactImg from '../../../assets/contact-img.png'
import SendEmail from '../../../assets/send-email.png'
import useDataCall from '../../../hooks/useDataCall'
import BottomLine from '../../footer/BottomLine'
// import { object, string } from "yup"
// import { yupResolver } from '@hookform/resolvers/yup'


// export const contactSchema = object().shape({
//   senderName: string().required("Name ist verpflichted"),
//   email: string().email().required("Email ist verpflichted").email("Bitte geben Sie eine gültige Email Adresse"),
//   subject: string().email().required("Subjekt ist verpflichted"),
//   content: string().email().required("Nachricht ist verpflichted").max(1000, "Maximum 20 Zeichen"),
// })

const Contact = () => {

  const [isSent, setIsSent] = useState(false)
  const {postData} = useDataCall()

  const [senderName, setSenderName] = useState("")
  const [from, setFrom] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  let messageInfo = {
    senderName: "",
    from: "",
    subject: "",
    content: ""
  }

  const handleSubmit = (e) => {
    setIsSent(true)
    e.preventDefault()

    messageInfo = {
      senderName: senderName,
      from: from,
      subject: subject,
      content: content
    }
    postData("messages", messageInfo)

    messageInfo = {
      senderName: "",
      from: "",
      subject: "",
      content: ""
    }
  }
  return (
    <>
       
        <div className='grid grid-rows-2 pt-12 lg:pt-0 bg-[#F1F7FE] w-full lg:grid-cols-2 lg:h-[70vh]' id="contact">
        {!isSent ?
          <form onSubmit={handleSubmit} className='rows-span-1 my-8 md:mt-6 lg:mt-0 flex items-center justify-center lg:cols-span-1 lg:h-[65vh]'>
            <fieldset className='border-2 rounded-lg w-[330px] p-5 border-[#567fa9]'>
              <legend className='text-2xl text-center text-[#3d5e7f] font-bold 2xl:text-4xl'>Kontaktiere Uns</legend>
              <div className="relative w-[330px] mt-2 xl:mt-0 xl:min-w-[180px] sm:w-[400px] md:w-[550px] lg:w-[360px] xl:w-[450px] 2xl:w-[600px] xl:mx-1 text-[#38638D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  placeholder="Name:"
                  onChange={(e)=>setSenderName(e.target.value)}
                  className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
              </div>
              <div className="relative w-[330px] mt-4 xl:min-w-[180px] sm:w-[400px] md:w-[550px] lg:w-[360px] xl:w-[450px] 2xl:w-[600px] xl:mt-6 text-[#38638D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                  <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                </svg>

                <input
                  type="text"
                  placeholder="Ihre Email:"
                  onChange={(e)=>setFrom(e.target.value)}
                  className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
              </div>
              <div className="relative w-[330px] mt-4 xl:min-w-[180px] sm:w-[400px] md:w-[550px] lg:w-[360px] xl:w-[450px] 2xl:w-[600px] xl:mt-6 text-[#38638D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>

                <input
                  type="text"
                  placeholder="Subjekt:"
                  onChange={(e)=>setSubject(e.target.value)}
                  className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
              </div>
              <div className="relative w-[330px] mt-4 xl:mt-6 xl:min-w-[180px] sm:w-[400px] md:w-[550px] lg:w-[360px] xl:w-[450px] 2xl:w-[600px] xl:mx-1 text-[#38638D]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 mt-3">
                  <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>
                <textarea
                  type="text"
                  placeholder="Nachricht:"
                  rows="4"
                  onChange={(e)=>setContent(e.target.value)}
                  className="w-full pl-[3rem] pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
              </div>
              <button className='bg-[#3d5e7f] flex justify-center items-center h-11 rounded-lg w-full text-white text-xl mt-5 xl:mt-10 hover:bg-[#648bb1] duration-150'>
                <img src={SendEmail} alt="sendEmail" className='mr-3'/>
                Senden
              </button>
            </fieldset>
          </form>
          :
          <h1 className='rows-span-1 text-2xl my-8 text-center px-3 flex items-center justify-center lg:cols-span-1 lg:h-[65vh] lg:text-3xl xl:px-6'>Ihre Nachricht ist gesendet worden. Wir werden uns schnellstmöglich bei Ihnen melden. </h1>
        }
        <div className='flex rows-span-1 mt-5 justify-center items-center lg:cols-span-1 lg:h-[65vh]'>
        <img src={ContactImg} alt="contact"/>
      </div>
    </div> 
    <BottomLine/>
    </>
    
  )
}

export default Contact