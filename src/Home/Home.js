import React from "react";
import { Feed } from "./Feed";
import { Sidebar } from "./Sidebar";
import { Widjet } from "./Widjet";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
function Home() {
   const user=useAuthState(auth);
    const navigate=useNavigate();
   const handlelogout=()=>{
      signOut(auth);
      console.log(user)
      navigate("/")
   }
   return (
      <div style={{display:"flex",paddingLeft:80 }}>
    <Sidebar handlelogout={handlelogout} user={user}/>  
      <Outlet/>
      <Widjet/>
      </div>
   );
}
export {Home}