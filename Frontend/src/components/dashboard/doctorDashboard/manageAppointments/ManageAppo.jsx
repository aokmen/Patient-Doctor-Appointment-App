import React from 'react'

const ManageAppo = () => {
    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
    const hours = ["00.00", "00.30", "01.00", "01.30", "02.00", "02.30", "03.00", "03.30", "04.00", 
    "04.30", "05.00", "05.30", "06.00", "06.30", "07.00", "07.30", "08.00", "08.30","09.00", "09.30",
    "10.00",  "10.30", "11.00", "11.30", "12.00", "12.30", "13.00",  "13.30", "14.00", "14.30", "15.00",  "15.30",
    "16.00",  "16.30", "17.00",  "17.30", "18.00",  "18.30", "19.00",  "19.30", "20.00",  "20.30", "21.00",  "21.30", 
    "22.00",  "22.30", "23.00",  "23.30", 
    ]
    const dauer = ["5 Min", "10 Min", "15 Min", "20 Min", "30 Min", "1 Stunde"]
  return (
    <div>
        
        
        
        <form className="w-full max-w-4xl mx-auto">
            <div className='flex justify-center items-center'>
                <label htmlFor="rangeDatum" className='max-w-md text-lg'>Von welchem Datum bis zu welchem Datum möchten Sie Ihre Termine anlegen:</label>
                <div className="flex flex-wrap -mx-3 mb-6 ml-3" id="rangeDatum">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-von-datum">
                            Von
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-von-datum" type="date" placeholder="Jane"/>
                        {/* <p className="text-red-500 text-xs italic">Bitte wählen Sie ein Anfangdatum.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-bis-datum">
                            Bis
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-bis-datum" type="date" placeholder="Doe"/>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-2">

            <h3 className='text-lg mx-auto'>Bitte geben Sie unten Ihre wöchentlichen Arbeitszeiten ein, um Ihre Termine zu erstellen:</h3>
            {
                days.map((item, index) => {
                    return <div key={index} className='flex items-center w-full mt-6'>
                <label htmlFor="montag" className='text-2xl'>{item}</label>
                <div className='w-full flex ml-12' id="montag">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Von
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {
                                    hours.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            BIS
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {
                                    hours.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Termin Dauer
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {
                                    dauer.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <button className='md:w-[10rem] md:h-[3rem] bg-sky-600 rounded-xl text-white mt-5 hover:bg-sky-500 duration-150'>ERSTELLEN</button>
                </div>
            </div>
                })
            }
            
            
                
                
                
            </div>
        </form>
    </div>
  )
}

export default ManageAppo