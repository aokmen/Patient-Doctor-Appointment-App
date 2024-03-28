import React from 'react'
import Termine from './Termine'

const KommendeTermine = ({appointmentsOfThisPatient, setTermin}) => {
    //console.log(appointmentsOfThisPatient)


  return (
    <>
        {
            appointmentsOfThisPatient?.map((appo, index) => {
                return <div key={index} >
                             <div key={index} className='mx-auto w-[300px] hover:cursor-pointer' onClick={()=>setTermin(appo)}>
                                    <Termine {...appo}/>
                            </div>
                            
                        </div>
            })
        }
        
    </>
    
  )
}

export default KommendeTermine