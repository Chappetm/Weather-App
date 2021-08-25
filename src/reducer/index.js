import { GET_CITY, REMOVE_CITY } from "../actions/const"


const initialState = {
    citiesLoaded: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            const filter = state.citiesLoaded.filter(city => city.id === action.payload.id)
            if(filter.length !== 0){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    citiesLoaded: [...state.citiesLoaded, action.payload]
                }
            }
            
        case REMOVE_CITY:
            const remove = state.citiesLoaded.filter(city => city.id != action.payload)
            return {
                ...state,
                citiesLoaded: remove
            }
        default:
            return state
    }
}