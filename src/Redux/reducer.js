
import {HEADERS,API} from '../Constants/constants'
import {LOGIN, REGISTER, USER_LOGOUT} from './type'

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
        case USER_LOGOUT:
            return{
                ...initialState
            }
        default :
        return state
    }
}