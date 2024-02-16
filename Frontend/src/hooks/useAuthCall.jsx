import axios from "axios";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


const url = process.env.REACT_APP_BASE_URL

const useAuthCall = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token} = useSelector(state => state.auth);

    /* -------------------------------------------------------------------------- */
    /*                               The Login Process                            */
    /* -------------------------------------------------------------------------- */

    const login = async (userData) => {  
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${url}/auth/login`,userData)
            dispatch(loginSuccess(data))
            
            navigate(`/${data.userType}`)
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
            await axios.post(`${url}/auth/logout`, null,{
                headers: {
                    Authorization: `Token ${token}`,
                  },
            })
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
            const { data } = await axios.post(`${url}/auth/register`, userData)
            dispatch(registerSuccess(data))
            console.log(data)
            navigate("/patient")
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
            const { data } = await axios.post(`${url}/auth/register`, userData)
            dispatch(registerSuccess(data))
            console.log(data)
            navigate("/doctor")
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
