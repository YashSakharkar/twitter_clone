import React from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Protected =({children})=>{
    const [user,isLoading]=useAuthState(auth);
    const navigate=useNavigate();
    if(user)
    {
        return  <Navigate to="/home"/>
    }
    if(isLoading)
    {
        <Navigate to="/login"/>
    }
    return children;
     
}
export {Protected};