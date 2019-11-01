
import {HEADERS,API} from '../Constants/constants'
import {LOGIN, REGISTER} from './type'

const initialState={
    user:{},
    cart:[]

}

export default function  reducer(state=initialState, action){
    switch (action.type){
        case  LOGIN:
        return{...state,
            user:action.payload
            } 
        case REGISTER:
            return{
                ...state,
                user:action.payload
            }
        default :
        return state
    }
}