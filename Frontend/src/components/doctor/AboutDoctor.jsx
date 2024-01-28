import React, { useEffect } from 'react'
import useDataCall from '../../hooks/useDataCall'

import user2Icon from '../../assets/user2.png'
import levelIcon from '../../assets/level.png'
import starIcon from '../../assets/star.png'
import commentIcon from '../../assets/comment.png'

const AboutDoctor = ({about, languages}) => {

  const {getData} = useDataCall()
  


  useEffect(() => {
    getData("doctors")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='about-doctor flex flex-col justify-center items-center text-center'>
      <h1 className='text-xl uber-mich font-bold'>Über mich</h1>
      <p className='text-md mt-3'>
        {about}
      </p>
      <button className='text-lg'>Sprachen: {languages.length ? languages.map((lang) => lang).join(", ") : "Deutsch"}</button>
      <div className='flex justify-around items-start'>
        <div className='flex flex-col w-20 items-center'>
          <img src={user2Icon} alt="userIcon" width={60}/>
          <h3>+1000 Patienten</h3>
        </div>
        <div className='flex flex-col w-20 items-center'>
          <img src={levelIcon} alt="levelIcon" width={60}/>
          <h3>+10 Jahre</h3>
        </div>
        <div className='flex flex-col w-20 items-center'>
          <img src={starIcon} alt="starIcon" width={60}/>
          <h3>4.6</h3>
        </div>
        <div className='flex flex-col w-20 items-center'>
          <img src={commentIcon} alt="userIcon" width={60}/>
          <h3>30 Comments</h3>
        </div>
      </div>

    </div>
  )
}

export default AboutDoctor