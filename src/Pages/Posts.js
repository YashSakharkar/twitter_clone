import { Avatar } from "@mui/material";
import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import "./Posts.css"
import { useLogginUser } from "../hooks/useLogginUser";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Posts=({p})=>{
     const [loginuser]=useLogginUser();
     const [user] =useAuthState(auth)
    const{name,post,image,email,userName}=p;
    return(

        <>
       <div className="post">
       <div className="post_avatar">
        <Avatar src= { loginuser[0]?.profileImage?loginuser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}/>
       </div>
       <div className="post_body">
            <div className="post_header">
            <div className="postheadertext">
            <h5>
                {name}{" "}
                <span className="postheadertextspecial">
                <VerifiedIcon className="postbadge"/>  @ {loginuser[0]?.userName ? loginuser[0]?.userName :<span> {user?.displayName}</span> }
                </span>
            </h5>
            </div>
            <br/>
            <br/>
            <div >
             <span className="postdescription">{post}</span>
            </div>
            <br/>
            <br/>
            <img src={image} width="470" className="imagepost"/>
            <div className="postfooter">
             <ChatBubbleOutlineIcon className="postfooticon"/>
             <RepeatIcon  className="postfooticon"/>
             <FavoriteBorderIcon className="postfooticon"/>
             <PublishIcon className="postfooticon"/>
            </div>
             </div>
       </div>
       </div>
        </>
    );
}
export {Posts}