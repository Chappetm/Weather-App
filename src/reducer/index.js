import { GET_CITY } from "../actions/const"


const initialState = {
    citiesLoaded: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            return {
                ...state,
                citiesLoaded: [...state.citiesLoaded, action.payload]
            }
        default:
            return state
    }
}