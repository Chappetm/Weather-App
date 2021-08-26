import { GET_DETAILS } from './const';
import axios from 'axios';

export default function getDetail(id){
    return async function(dispatch){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=4ed91553e8521732e806aee7a1072022&units=metric`)
        dispatch({
            type: GET_DETAILS,
            payload: response.data
        })
    }
}