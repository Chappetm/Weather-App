import axios from "axios";
import { GET_CITY } from "./const";

export default function getCity(name){
    return async function(dispatch){
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        dispatch({
            type: GET_CITY,
            payload: response.data
        })
    }
}