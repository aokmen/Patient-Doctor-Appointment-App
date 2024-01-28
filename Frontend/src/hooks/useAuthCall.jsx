import axios from "axios";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
// import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"


const url = process.env.REACT_APP_BASE_URL

const useAuthCall = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    /* -------------------------------------------------------------------------- */
    /*                               The Login Process                            */
    /* -------------------------------------------------------------------------- */

    const login = async (userData) => {  
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${url}/auth/login`,userData)
            dispatch(loginSuccess(data))
        } catch (error) {
            console.log(error.message);
            dispatch(fetchFail())
        }
    }
    /* -------------------------------------------------------------------------- */
    /*                              The Logout Process                            */
    /* -------------------------------------------------------------------------- */


    const logout = async () => {  
        dispatch(fetchStart())
        try {
            await axios.post(`${url}/auth/logout`)
            dispatch(logoutSuccess())
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                            The Patient Registration                        */
    /* -------------------------------------------------------------------------- */

    const regPatient = async (userData) => { 
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${url}/patients`, userData)
            dispatch(registerSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                            The Doctor Registration                         */
    /* -------------------------------------------------------------------------- */

    const regDoctor = async (userData) => { 
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${url}/doctors`, userData)
            dispatch(registerSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    return {
        login, logout, regPatient, regDoctor
    }

}
export default useAuthCall