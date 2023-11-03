import * as types from "./actionTypes";
import axios from "axios";

 export const getprofile = (query , filter) => (dispatch) => {

    if(filter===""){
        dispatch({type: types.GET_PROFILE_REQUEST});
        return axios
        .get(`https://reactserver-gdzy.onrender.com/profile?q=${query}`)
        .then((res) => {
            dispatch({type: types.GET_PROFILE_SUCCESS, payload: res.data});
          
        })
        .catch((e) => {
            dispatch({type: types.GET_PROFILE_FAILURE, payload: e});
        });
    }else{
        dispatch({type: types.GET_PROFILE_REQUEST});
        return axios
        .get(`https://reactserver-gdzy.onrender.com/profile?q=${filter}`)
        .then((res) => {
            dispatch({type: types.GET_PROFILE_SUCCESS, payload: res.data});
          
        })
        .catch((e) => {
            dispatch({type: types.GET_PROFILE_FAILURE, payload: e});
        });
    }
    
  
};