import React, { useState } from "react";
import"./Create.css";
import Login from "./Login";
import CloseIcon from '@mui/icons-material/Close';
import {  Navigate, useNavigate } from "react-router-dom";
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
import axios from "axios";  
import { Box, Modal } from "@mui/material";

const Singin  =()=>
{
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[userName,setUserName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [isloading,setLoading]=useState(false);
    const[open ,setOpen]=useState(false)
    //const user=useAuthState(auth);
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const submithandler=(e)=>{
        e.preventDefault();
        console.log("clicked")
        
        signInWithEmailAndPassword(email,password) 
        }     
        const userinfo={
            name :name,
             userName:userName,
            email:email,
            password:password
      }
      
          axios.post("http://localhost:5000/createuser",userinfo)
        //  setLoading(false)
     if(user){
         
       navigate("/home/homes")
     }
    
    
    return(
<>
   <div className="account"> 
    <div className="account-conatiner">
     <button className="btnca" onClick={()=>{ navigate(-1)}}><CloseIcon/></button>
    <div className="account-info"> 
        <h1 style={{fontSize:35,textAlign:"center",paddingRight:80}} >Sign in</h1>
        <br/>
        <br/>
        <form onSubmit={submithandler}>
           <input type="text" placeholder="@ name"className="btn2" onChange={(e)=>{setName(e.target.value)}}/>
           <br/>
           <br/>
           <input type="text" placeholder="@ username"className="btn2" onChange={(e)=>{setUserName(e.target.value)}}/>
           <br/>
           <br/>
            <input type="email" placeholder="@ EmailAddress"className="btn2" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <input type="password"  placeholder="@ Password"className="btn2" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <br/>
            <br/>
            <input type="submit" placeholder="Sing up"  className="btn2" style={{backgroundColor:"black",color:"white"}} /><br/>
            <br/>
            <br/>
            <br/>
            
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
export {Singin} ;