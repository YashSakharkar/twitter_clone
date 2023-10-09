import React, { useState } from "react";
import"./Create.css";
import Login from "./Login";
import CloseIcon from '@mui/icons-material/Close';
import {  useNavigate } from "react-router-dom";
import { withTheme } from "@mui/material";
import auth from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
 import axios from 'axios'
const CreateAccount =()=>
{
    const navigate=useNavigate();
   const[fullName,setFullName]= useState('');
   const[phone,setPhone]= useState('');
   const[email,setEmail]= useState('');
   const[password,setPassword]= useState('');
   const[isloading,setIsLoading]=useState('');

   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(error)
  console.log(user);

  const handlerevent=(e)=>{
 e.preventDefault();
 setIsLoading(true)
    console.log("clicked");
    console.log("loading.......")
  //   console.log(fullName);
    // console.log( phone);
   //  console.log(email,password);
      createUserWithEmailAndPassword(email,password); 
      setIsLoading(false)
  }
   
    return(
<>
   <div className="account"> 
    <div className="account-conatiner">
     <button className="btnca" onClick={()=>{ navigate(-1)}}><CloseIcon/></button>
    <div className="account-info"> 
        <h2 style={{fontSize:40,textAlign:"center",paddingRight:80}} >Create your account</h2>
        <br/>
        <br/>
        <form onSubmit={handlerevent}>
            <input type="text" placeholder=" @ FullName"className="btn2" onChange={(e)=>{setFullName(e.target.value)}}/>
            <br/> 
            <br/>
            <input type="email" placeholder="@ EmailAddress"className="btn2" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <input type="password"  placeholder="@ Password"className="btn2"  onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <br/>
            <br/>
            <input type="submit" placeholder="next"  className="btn2"  style={{backgroundColor:"black",color:"white"}} /><br/>
            <br/>
           {
          isloading ?  <span>loading....</span>: undefined
            }
        </form>
    </div>
    </div>
 </div>
 <div className="l-contain">
    <Login/>
    </div>
</>
    );
}
export {CreateAccount} ;