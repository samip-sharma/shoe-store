
import {HEADERS,API} from '../Constants/constants'
import {LOGIN, REGISTER, USER_LOGOUT, UPLOAD_SHOE} from './type'

const initialState={
    user:{},
    cart:[],
    shoe:[]

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
        case UPLOAD_SHOE:
            return{
                ...state,
                shoe : [...state.shoe, action.payload]
            }
        default :
        return state
    }
}