import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const useLogginUser=()=>{
   const [user]= useAuthState(auth)
   const email=user?.email;
   //console.log(email)
   const [loggedinuser,setLoggedInUser]=useState({})
   
   useEffect(()=>{
   fetch(`http://localhost:5000/loginuser?email=${email}`)
    .then(res=>res.json()).
   then(data=> {
     // console.log(data)
      setLoggedInUser(data)
 })
   },[email,loggedinuser])  
   return [loggedinuser,setLoggedInUser]
    
}
export {useLogginUser}