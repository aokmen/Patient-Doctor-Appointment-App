import React from 'react'
import './auth.css'
import RegisterDoctorForm, { registerSchema } from '../../components/authForm/RegisterDoctorForm'
import image from "../../assets/register.png"
import { Formik } from "formik"
import useAuthCall from '../../hooks/useAuthCall'

const RegisterDoctor = () => {

  const { regDoctor } = useAuthCall()
  return (
    <div className="grid grid-cols-2 register-page">
      {/* Left side (Image) */}
      <div className="block m-auto ">
        <img
          //style={{ width: '700px', height: '700px' }}
          src={image}
          alt="Login Image"
        />
      </div>
      <div>
      <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              regDoctor({ ...values, password2: values.password })
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <RegisterDoctorForm {...props} />}
          ></Formik>
      </div>
      
      
    </div>
  )
}

export default RegisterDoctor