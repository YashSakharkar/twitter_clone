import React, { useEffect, useState } from "react";
import"./Page.css";
import { Tweetbox } from "./Tweetbox";
import { Divider } from "@mui/material";
 import { Posts } from "./Posts";
import { useLogginUser } from "../hooks/useLogginUser";
const Homes=()=>{
 
   
 const[posts,setPosts]=useState([])
 useEffect(()=>{
     
      fetch(`http://localhost:5000/post`)
      .then(res=>res.json()).then(data=> {
       // console.log(data)
       setPosts(data)
      })

 },[posts])
    return( 
     <div className="page">
       <div  className="page_title">
     <span >Home</span>
     </div>
      <Divider/>
      <Tweetbox/>
      {
        posts.map(p=><Posts key={p._id} p={p}/>)
      }
     </div>
    );
}
export {Homes}