import { fetchFail, fetchStart, getDataSuccess } from "../features/dataSlice";
import { useDispatch } from "react-redux"
import useAxios from "./useAxios";

const url = process.env.REACT_APP_BASE_URL

const useDataCall = () => {
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()

    /* -------------------------------------------------------------------------- */
    /*                             Get Data with Axios                            */
    /* -------------------------------------------------------------------------- */

    const getData = async (url) => {  // url is the parameter added to the end of the URL. For example: url=doctors, url= patients, url= messages
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken(`/${url}`)
            dispatch(getDataSuccess({ data, url }))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             Get Single Appointment Data with Axios                            */
    /* -------------------------------------------------------------------------- */

    const getSingleData = async (url, userId) => {  
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken(`/${url}/${userId}`)
            dispatch(getDataSuccess({ data: data?.data?.appointments, url: "appointments" }))
            //console.log(data)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }
    /* -------------------------------------------------------------------------- */
    /*                            Post Data with Axios                            */
    /* -------------------------------------------------------------------------- */


    const postData = async (url, info) => {  
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/${url}/`, info)
            getData(url)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                           Update Data with Axios                           */
    /* -------------------------------------------------------------------------- */

    const putData = async (url,id,info) => { 
        dispatch(fetchStart())
        try {
            await axiosWithToken.put(`/${url}/${id}`, info)
            getData(url)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }
    
  
    /* -------------------------------------------------------------------------- */
    /*                            Delete Data with Axios                          */
    /* -------------------------------------------------------------------------- */

    const delData = async (url, id) => { 
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/${url}/${id}`)
            getData(url)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    return {
        getData, postData, putData, delData, getSingleData
    }

}
export default useDataCall