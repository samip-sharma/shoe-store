
import {HEADERS,API} from '../Constants/constants'
import {LOGIN, REGISTER, USER_LOGOUT, UPLOAD_SHOE ,GET_SHOES} from './type'

const initialState={
    user:{},
    cart:[],
    shoes:[]

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
                shoes : [...state.shoes, action.payload]
            }
        case GET_SHOES:
            return{
                ...state,
                shoes : action.payload
            }
        default :
        return state
    }
}