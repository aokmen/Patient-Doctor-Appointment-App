import { fetchFail, fetchStart, getDataSuccess } from "../features/dataSlice";

import { useDispatch } from "react-redux"
import axios from "axios";

const url = process.env.REACT_APP_BASE_URL

const useDataCall = () => {
    const dispatch = useDispatch()

    /* -------------------------------------------------------------------------- */
    /*                             Get Data with Axios                            */
    /* -------------------------------------------------------------------------- */

    const getData = async (res) => {  // res is the parameter added to the end of the URL. For example: res=doctors, res= patients, res= messages
        dispatch(fetchStart())
        try {
            const { data } = await axios(`${url}/${res}`)
            dispatch(getDataSuccess({ data, res }))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }
    /* -------------------------------------------------------------------------- */
    /*                            Post Data with Axios                            */
    /* -------------------------------------------------------------------------- */


    const postData = async (res, info) => {  
        dispatch(fetchStart())
        try {
            await axios.post(`${url}/${res}/`, info)
            getData(res)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                           Update Data with Axios                           */
    /* -------------------------------------------------------------------------- */

    const putData = async (res,id,info) => { 
        dispatch(fetchStart())
        try {
            await axios.put(`${url}/${res}/${id}`, info)
            getData(res)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }
    
  
    /* -------------------------------------------------------------------------- */
    /*                            Delete Data with Axios                          */
    /* -------------------------------------------------------------------------- */

    const delData = async (res, id) => { 
        dispatch(fetchStart())
        try {
            await axios.delete(`${url}/${res}/${id}`)
            getData(res)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
    }

    return {
        getData, postData, putData, delData
    }

}
export default useDataCall