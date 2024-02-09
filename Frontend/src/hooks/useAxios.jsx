import axios from "axios";
import { useSelector } from "react-redux";

const URL = process.env.REACT_APP_BASE_URL

const useAxios = () => {
    const {token} = useSelector((state)=> state.auth)

    const axiosWithToken = axios.create({
        baseURL: `${URL}`,
        headers: {Authorization: `Token ${token}`},
    })
    const axiosPublic = axios.create({
        baseURL: `${URL}`,
    })
    return {axiosWithToken, axiosPublic}
}
export default useAxios