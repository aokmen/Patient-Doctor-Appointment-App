import logo from "../../assets/logo.png";
import doctor from "../../assets/doctor.png";
import patient from "../../assets/patient.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../../hooks/useAuthCall";

export default function Header() {
  const { currentUser} = useSelector((state) => state.auth)
  const { logout } = useAuthCall()

  const navigate = useNavigate()
  const closed = () => {
    logout()
    navigate("/")
  }
  return (
    <nav className="h-[103px] bg-main-dark-blue w-full py-6">
      <div className="container mx-auto px-5  xl:px-10 lg:flex  justify-between">
        <button className="w-[202px] h-[40px] top-[29px] left-[87px]">
          <div className="flex">
            <img
              src={logo}
              alt="logo"
              className="object-contain w-[39px] h-auto"
              onClick={()=>navigate("/")}
            />
            <div className=" px-4 py-2 text-white text-[32px]  font-light ">
              termin<span className="text-main-light-blue">uns</span>
            </div>
          </div>
        </button>

        <ul className="flex space-x-6">
          <li>
            <button className="px-4 py-3  hover:bg-main-light-blue text-white rounded-2xl text-bg-main-dark-blue text-[20px] font-light" onClick={()=>navigate("/")}>
              Home
            </button>
          </li>
          <li>
            <button className="px-4 py-3 hover:bg-main-light-blue rounded-2xl text-white text-[20px] font-light" onClick={()=>navigate("/about")}>
              Über uns
            </button>
          </li>
          <li>
            <button className="px-4 py-3 hover:bg-main-light-blue rounded-2xl text-white text-[20px] font-light">
              Service
            </button>
          </li>
          <li>
            <button className="px-4 py-3 hover:bg-main-light-blue rounded-2xl text-white text-[20px] font-light">
              Kontakt
            </button>
          </li>
          {currentUser ? <li>
            <button className="px-4 py-3 hover:bg-main-light-blue rounded-2xl text-white text-[20px] font-light" onClick={()=> closed()}>
              Ausloggen
            </button>
          </li> : null}
          
        </ul>

        <div className="button-containers flex gap-1 relative">
          <button className="bg-main-light-blue w-[136px] h-[60px] rounded-l-3xl flex flex-col items-center justify-center">
            <img
              className="relative mb-0 mt-2 w-[27px] h-[27px]"
              src={patient}
              alt="patient"
            />
            <div className="text-main-dark-blue text-[16px] font-normal">
              Patient
            </div>
          </button>

          <button className="absolute bg-main-dark-blue text-white font-light rounded-b-xl px-3 py-1 z-10 top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={()=>navigate("/login")}>
            Einloggen
          </button>
          <button className="bg-main-light-blue w-[136px] h-[60px] rounded-r-3xl flex flex-col items-center justify-center">
            <img
              className="relative mb-0 mt-2 w-[29.09px] h-[29.09px]"
              src={doctor}
              alt="group"
            />
            <div className="text-main-dark-blue text-[16px] font-normal">
              Arzt
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
