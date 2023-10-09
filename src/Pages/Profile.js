import React from "react";
import { Mainpage } from "./Profile/Mainpage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Profile=()=>{
   const [user]=useAuthState(auth)
   console.log(user)
    return(
     <div className="page ">
       <Mainpage user={user}/>
     </div>
    );
}
export {Profile}