import { REMOVE_DETAIL } from "./const";

export default function deleteDetail(id){
    console.log('ACTION')
    return {
        type: REMOVE_DETAIL,
        payload: id
    }
}