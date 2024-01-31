import React, { useState } from 'react'
import { Form } from "formik"
import { object, string } from "yup"
import Datepicker from "tailwind-datepicker-react"



export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("username zorunludur"),
  first_name: string()
    .max(20, "İsim 20 karakterden az olmalıdır.")
    .required("first_name zorunludur"),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required("last_name zorunludur"),

  email: string().email().required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
})

const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: "Clear",
	maxDate: new Date("2024-02-29"),
	minDate: new Date("1920-01-01"),
	theme: {
		background: "white",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "de",
	disabledDates: [],
	weekDays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
	inputNameProp: "birthdate",
	inputIdProp: "birthdate",
	inputPlaceholderProp: "Geburtstag",
	inputDateFormatProp: {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	}
}


const RegisterDoctorForm = () => {

  const [isPasswordHidden, setPasswordHidden] = useState(true)

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
    <div className='register-form-page text-center flex flex-col justify-center items-center'>
      <h1 className='reg-title'>Arzt Registrierung</h1>
      <Form className='register-form flex flex-col items-center justify-center'>
      
        <div className='flex justify-evenly w-full'>
          <div className="relative mt-2 max-w-[400px] min-w-[100px] w-[320px] text-gray-600">
            <input
              type="text"
              placeholder="Vorname"
              className="w-full pl-[2.5rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
          </div>
          <div className="relative mt-2 max-w-[400px] min-w-[100px] w-[320px] text-gray-600">
            <input
              type="text"
              placeholder="Nachname"
              className="w-full pl-[2.5rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
          </div>
        </div>
        <div className='flex justify-evenly w-full mt-4'>
          <div className="relative max-w-[400px] min-w-[100px] w-[320px] mt-2">
            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input
                type="text"
                placeholder="Email"
                className="w-full pl-12 h-12 pr-3 py-2 text-gray-600 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
          </div>
          <div className="relative max-w-[400px] min-w-[100px] w-[320px] mt-2">
                <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
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
                <input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Password"
                    className="w-full pr-12 h-12 pl-3 py-2 text-gray-600 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
                />
          </div>
        </div>  
        <div className='flex items-center justify-evenly w-full mt-4'>
          <div className='relative max-w-[400px] min-w-[100px] w-[320px] mt-2' >
            <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} classNames='flex items-center relative datepicker'>
					      
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <input type="text" className="w-full pl-[3rem] h-11 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg" placeholder="Geburtstag" value={selectedDate} onFocus={() => setShow(true)} readOnly />
					     
			      </Datepicker>
          </div>
          
          <div className="relative max-w-[400px] min-w-[100px] w-[320px] mt-2">
            <select className="w-full h-11 px-3 py-2 text-md text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
              <option value="0" disabled selected hidden className='text-gray-600'>Geschlecht</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="3">Others</option>
            </select>
          </div>
        </div>
        <div className="relative max-w-[652px] text-gray-600 w-full min-w-[200px] mt-4 h-12">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <input
              type="text"
              placeholder="Adresse"
              className="w-full pl-[3rem] pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
        </div>  
        <div className='flex items-center justify-evenly w-full mt-4'>
          <div className="relative max-w-[400px] min-w-[100px] w-[320px] text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <input
              type="number"
              placeholder="Postleitzahl"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
          </div>
          <div className="relative max-w-[400px] min-w-[100px] w-[320px] text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-gray-400 left-3 inset-y-0 my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <input
              type="number"
              placeholder="Telefon"
              className="w-full pl-[3rem] h-12 pr-3 py-2 appearance-none bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-lg"
            />
          </div>
        </div>

        <button className='flex justify-center register-button duration-150 mx-auto'>REGISTER</button>
        
      </Form>
    </div>
    
  )
}


export default RegisterDoctorForm