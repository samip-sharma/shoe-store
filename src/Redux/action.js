import {LOGIN, REGISTER, USER_LOGOUT ,UPLOAD_SHOE} from './type'
import {API, HEADERS} from '../Constants/constants'


export const login=(login_state)=>{
    return function(dispatch){
        fetch(API+"getToken",{
            method:"POST",
            headers:HEADERS,
            body:JSON.stringify(
                login_state
            )
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(data.token){
            localStorage.token=data.token
            dispatch({"type":LOGIN,payload:data})
            }
            })
    }
}

export const userLogout=()=>{
    return function(dispatch){
            dispatch({"type":USER_LOGOUT,payload:{}})
    }
}


export const register=(register_state)=>{
    return function(dispatch){
        fetch(API+"users",{
            method:"POST",
            headers:HEADERS,
            body:JSON.stringify(
                register_state
            )
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(!data.error){dispatch({"type":REGISTER,payload:data})}
            })
    }
}

export const uploadShoe=(state)=>{
    return function(dispatch){
        fetch(API+"shoes",{
            method:"POST",
            headers:HEADERS,
            body:JSON.stringify(
                state
            )
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(!data.error){dispatch({"type":UPLOAD_SHOE,payload:data})}
            })
    }
}