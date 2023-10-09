import React, { useState } from "react";
import"./Page.css"
import"./Tweet.css"
import { Avatar, Divider } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useLogginUser } from "../hooks/useLogginUser";
 
const Tweetbox=()=>{
    const[post,setPost]=useState('')
    const[imageurl,setImageUrl]=useState('')
    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const [isLoading,setIsLoading]=useState('')
     
   
    const [loginuser]= useLogginUser();
       //    const profileImage=loginuser[0]?.profileImage;
        //  const coverImage=loginuser[0]?.coverImage;
    const profilepic =loginuser[0]?.profilepic ? loginuser[0]?.profilepic : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    const [user]=useAuthState(auth);
     const email=user?.email;
   // console.log(email)
    const handleimage=(e)=>{
        e.preventDefault()
        setIsLoading(true)
        console.log('click')
        const image=e.target.files[0];
        const formdata=new FormData();
        formdata.set('image',image);
        axios.post("https://api.imgbb.com/1/upload?key=2ff4c459eb4c8b8ed4d7c5bdb063d953",formdata)
        .then(res=>{  
             setImageUrl(res.data.data.display_url)
            console.log(res.data.data.display_url)
            setIsLoading(false)
        }
            ).catch((error)=>{
                console.log(error)
                setIsLoading(false)
            })
        
    }
    
    const handletweet=(e)=>{
        e.preventDefault();
      // console.log('click'); 
      console.log(user.providerData[0].providerId)
      if(user.providerData[0].providerId==='password')
      {
        fetch(
            fetch(`http://localhost:5000/loginuser?email=${email}`)
    .then(res=>res.json()).
   then(data=> {
    console.log(data[0]?.name)
    setName(data[0]?.name)
    console.log(data[0]?.userName)
setUsername(data[0]?.userName)})
        )
      }
     
      if(name)
      {
        const userpost={
            
            post:post,
           image:imageurl,
           name:name,
           username:username,
           email:email
        }
        console.log(post)
        console.log(userpost)
        setPost('')
        setImageUrl('')
       fetch(`http://localhost:5000/post`,
     {
          method:"POST",
           headers:{
                'content-type':'application/json'
           },
           body: JSON.stringify(userpost)
       })
       .then(res=> res.json())
        .then(data=>
         {console.log(data)}).catch(err=>{
               console.log(err)
            })
    }
     
}
    return(
<div className="tweetbox"> 
        <div className="tweet">
        <form onSubmit={handletweet}> 
        <div className="tweet"> 
        <Avatar src=  { loginuser[0]?.profileImage?loginuser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}></Avatar>
            <input type="text" placeholder="Whats Happening ?" style={{border:"none",fontSize:20,width:500}} onChange={(e)=>setPost(e.target.value)} value={post} required/>
            </div>  
           <label htmlFor="image" className="imageicon">
           {
                isLoading?<span className="imageloading">uploading</span>: <span  className="imageloading" > {imageurl?"image uploaded":<AddPhotoAlternateIcon/>}</span>
            }
           </label>  
           <input type="file" id="image" className="imageinput"  onChange={handleimage} />
            <input type="submit" value="Tweet" className="tweetpost"/>
         </form>
        </div>
        </div>
    );
}
export{Tweetbox}