import React, { useEffect } from 'react'
import { getGermanHolidays } from '../uberblick/HolidayService';

const Feiertage = ({setHolidays, holidayArray}) => {

    

    useEffect(() => {
        const fetchHolidays = async () => {
          try {
            const holidayData = await getGermanHolidays();
            setHolidays(holidayData);
          } catch (error) {
            console.error('Error fetching holidays:', error);
          }
        };
    
        //fetchHolidays();
    
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <div>
        <table className='mt-5 text-start text-[#38638D] min-w-[27rem] max-w-[27rem] wrap'>
                       {

                            holidayArray.map((item) => {
                                
                                return (
                                    <>
                                        <tr><th className='text-[#6f48eb]'>{item.date.iso}</th></tr>
                                        <tr className='flex justify-center items-center'>
                                            <td className='py-1 px-2'>{item.name}</td>
                                            <td className=' pl-2'>
                                               {
                                                    item.states !== "All" ? item.states?.map((stat) => {
                                                        return (
                                                            <>
                                                                {stat.name},
                                                            </>
                                                        )
                                                    })
                                                    :
                                                    "Alle Länder"
                                                } 
                                            </td>
                                            
                                        
                                        </tr>
                                        
                                    </>
                                
                                )

                            })
                        } 
                    </table>
    </div>
  )
}

export default Feiertage