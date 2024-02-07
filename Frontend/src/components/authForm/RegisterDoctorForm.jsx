import React, { useState } from 'react'
import { object, string } from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import useAuthCall from '../../hooks/useAuthCall'
import doctor from '../../assets/doctor.png'



export const registerSchema = object().shape({
  firstName: string()
    .max(20, "Maximum 20 Buchstaben")
    .required("Vorname ist verpflichted"),
  lastName: string()
    .max(20, "Maximum 20 Buchstaben")
    .required("Nachname ist verpflichted"),
  email: string().email().required("Email ist verpflichted"),
  password: string()
    .required("Email ist verpflichted")
    .min(8, "Minimum 8 Zeichen")
    .max(20, "Maximum 20 Zeichen")
    .matches(/\d+/, "Minimum 1 Ziffer")
    .matches(/[a-z]/, "Minimum 1 Kleinbuchstabe")
    .matches(/[A-Z]/, "Minimum 1 Großbuchstabe")
    .matches(/[!,?{}><%&$#£+-.]+/, "Minimum 1 Sonderzeichen"),
  street: string()
    .required("Straße ist verpflichted"),
  zipCode: string()
    .required("PLZ ist verpflichted"),
  branch: string()
    .required("PLZ ist verpflichted"),
})





const RegisterDoctorForm = () => {
  // const initiallVal = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   birthDate: "",
  //   gender: "",
  //   zipCode: "",
  //   cityName: "",
  //   street: ""
  // }

  const { regDoctor } = useAuthCall()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    regDoctor(data)
  }

  const [isPasswordHidden, setPasswordHidden] = useState(true)
  const [isCalendarHidden, setCalendarHidden] = useState(true)

   const [show, setShow] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const handleChange = (selectedDate) => {
		setSelectedDate(selectedDate.toISOString().slice(0,10));
    //console.log(selectedDate.toISOString().slice(0,10))
	};

	const handleClose = (state) => {
		setShow(state);
	};
  
  
  
  return (
    <div className='register-form-page h-[90vh] md:h-[88vh] md:py-11 text-center flex flex-col items-center'>
      <div className='flex justify-center items-center mb-12 lg:mb-5'>
        <div className='flex justify-center items-center title-heading mr-3 rounded-md lg:rounded-lg p-2'>
          <img src={doctor} alt="patientIcon" width={20} height={30}/>
          <h1 className='text-[#38638D] font-bold ml-1 md:text-lg xl:text-2xl'>Ärztin/Arzt</h1>
        </div>
        <h1 className='reg-title my-4 md:my-5 text-2xl md:text-3xl xl:text-4xl'>Registrierung</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='register-form mt-10 md:mt-6 lg:mt-12 xl:mt-0 flex flex-col items-center justify-center'>
      
        <div className='flex flex-col items-center xl:flex-row xl:justify-between w-full'>
          <div className="relative w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] text-[#38638D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>

            <input
              type="text"
              {...register('firstName')}
              placeholder="Vorname"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.firstName && (
            <p className="text-xs italic text-cyan-100">{errors.firstName.message}</p>
          )}
          </div>
          <div className="relative w-[330px] mt-2 xl:mt-0 xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:w-[300px] xl:mx-1 text-[#38638D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            <input
              type="text"
              {...register('lastName')}
              placeholder="Nachname"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.lastName && (
              <p className="text-xs italic text-cyan-100">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className='flex flex-col items-center xl:flex-row xl:justify-between w-full 2xl:mt-4'>
          <div className="relative mt-2 w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] text-[#38638D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
            </svg>

            <input
              type="text"
              {...register('title')}
              placeholder="Titel"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.title && (
            <p className="text-xs italic text-cyan-100">{errors.title.message}</p>
          )}
          </div>
          <div className="relative mt-2 w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] focus:border-indigo-600 shadow-sm rounded-lg text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>

            <select defaultValue="Branch" {...register('branch')} className="w-full pl-[3rem] h-12 px-3 py-2 text-md text-[#38638D] bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
              <option value="Branch" disabled hidden className='text-[#38638D]'>Branch</option>
              <option value="Zahnarzt/ärztin">Zahnarzt/ärztin</option>
              <option value="Hausarzt/ärztin">Hausarzt/ärztin</option>
              <option value="HNO">HNO</option>
              <option value="Andere">Andere</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col items-center xl:flex-row xl:justify-between w-full 2xl:mt-4'>
          <div className="relative w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] mt-2">
            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input
                type="text"
                {...register('email')}
                placeholder="Email"
                className="w-full pl-12 h-12 pr-3 py-2 text-[#38638D] bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.email && <p className="text-xs italic text-cyan-100">{errors.email.message}</p>}
          </div>
          <div className="relative w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] mt-2">
                <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-[#38638D]"
                    onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )
                    }
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>

                <input
                    type={isPasswordHidden ? "password" : "text"}
                    {...register('password')}
                    placeholder="Password"
                    className="w-full pl-[3rem] pr-12 h-12 py-2 text-[#38638D] bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
                {errors.password && (
                  <p className="text-xs italic text-cyan-100">{errors.password.message}</p>
                )}
          </div>
        </div>  
        <div className='flex flex-col items-center xl:flex-row xl:justify-between w-full 2xl:mt-4'>
          <div className='relative w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] mt-2 flex items-center' >
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setCalendarHidden(!isCalendarHidden)} className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {
              isCalendarHidden ? 
              <input type="text" {...register('birthDate')} onClick={() => setCalendarHidden(!isCalendarHidden)} className="w-full pl-[3rem] text-[#38638D] h-11 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg" placeholder="Geburtstag" onFocus={() => {setShow(true)}} /> 
              : 
              <input type="date" {...register('birthDate')} className="w-full pl-[3rem] text-[#38638D] h-11 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg" placeholder="Geburtstag" onFocus={() => {setShow(true)}} />
            }
            
					    
          </div>
          
          <div className="relative mt-2 w-[330px] xl:min-w-[180px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:mx-1 xl:w-[300px] focus:border-indigo-600 shadow-sm rounded-lg text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            <select defaultValue="Geschlecht" {...register('gender')} className="w-full pl-[3rem] h-11 px-3 py-2 text-md text-[#38638D] bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
              <option value="Geschlecht" disabled hidden className='text-[#38638D]'>Geschlecht</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Others">Andere</option>
            </select>
          </div>
        </div>
        <fieldset className='w-[330px] sm:w-[400px] md:w-[300px] lg:w-[360px] xl:w-[500px] 2xl:min-w-[664px] border-2 py-3 px-2 mt-2 mb-10 md:mb-6 rounded-lg'>
          <legend  className='text-white'>Adresse</legend>
          <div className='w-[310px] sm:w-[380px] md:w-[280px] lg:w-[340px] xl:min-w-[480px] 2xl:min-w-[646px] 2xl:mt-2'>
            <div className="relative max-w-[652px] 2xl:w-[646px] xl:min-w-[420px] text-[#38638D] w-full min-w-[200px] h-12">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <input
              type="text"
              {...register('street')}
              placeholder="Straße"
              className="w-full pl-[3rem] pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.street && (
              <p className="text-xs italic text-cyan-100">{errors.street.message}</p>
            )}
        </div>  
        <div className='flex flex-col xl:flex-row items-center justify-between w-full 2xl:mt-2'>
          <div className="relative mt-2 w-[310px] xl:min-w-[205px] sm:w-[380px] md:w-[280px] lg:w-[340px] xl:mx-1 xl:w-[285px] xl:max-w-[640px] text-[#38638D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>

            <input
              type="number"
              {...register('zipCode')}
              placeholder="Postleitzahl"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.zipCode && (
              <p className="text-xs italic text-cyan-100">{errors.zipCode.message}</p>
            )}
          </div>
          <div className="relative mt-2 w-[310px] xl:min-w-[205px] sm:w-[380px] md:w-[280px] lg:w-[340px] xl:mx-1 xl:w-[285px] text-[#38638D]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            <input
              type="string"
              {...register('cityName')}
              placeholder="City"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
            {errors.cityName && (
            <p className="text-xs italic text-cyan-100">{errors.cityName.message}</p>
          )}
          </div>
        </div>
          </div>
          
        </fieldset>
        

        <button type='submit' className='flex justify-center register-button duration-150 mx-auto'>REGISTRIEREN</button>
        
      </form>
    </div>
    
  )
}

export default RegisterDoctorForm

