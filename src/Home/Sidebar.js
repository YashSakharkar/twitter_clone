import React, { useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Sidebaroption } from "./Sidebaroption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListIcon from '@mui/icons-material/List';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Home } from "./Home";
import { Avatar, Button, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import"./Sidebaroption.css"
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Customlink } from "../Pages/Customlink";
import { useLogginUser } from "../hooks/useLogginUser";
 
 const Sidebar=({handlelogout,user})=>
 {
    const [loginuser]= useLogginUser();
    const [anchore1,setAnchore1]=useState(null);
    const openmenu=Boolean(anchore1);
    const profilepic =loginuser[0]?.profilepic ? loginuser[0]?.profilepic : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    const handleclick=(e)=>{
        setAnchore1(e.currentTarget);
    }
    const handleclose=()=>{
        setAnchore1(null);
    }
  // const loginuser=useLogginUser();
 // console.log(loginuser[0]?.userName)
 // console.log(loginuser[0]?.name)
    const email=user[0]?.email
    const displayname=user[0]?.displayName
   // console.log(displayname)
   // console.log(email)
   //const username=loginuser[0]?.userName;
   //console.log(loginuser[0]?.name)
 


    return(
         
        <div style={{paddingLeft:90,paddingTop:10,width:100,height:10}}  >
        <div className="sidebarbody"> 
       <label className="twitterimage"> <TwitterIcon /></label>
        <br/>
        <br/>
        <Customlink to={"/home/homes"}>
        <Sidebaroption active Icon={HomeIcon} Text="Home"/>
        </Customlink>
        <Customlink to={"/home/explore"}>
        <Sidebaroption active Icon={ SearchIcon} Text="Explore"/>
        </Customlink> 
         <Customlink to={"/home/notification"}><Sidebaroption Active Icon={NotificationsIcon} Text="Notification"/>
         </Customlink> 
         <Customlink to={"/home/messages"}>
        <Sidebaroption active Icon={ MailOutlineIcon} Text="Messages"/>
        </Customlink>  
        <Customlink to={"/home/list"}> 
        <Sidebaroption active Icon={ ListIcon} Text="Lists"/>
        </Customlink>
        <Customlink to={"/home/notification"}> 
        <Sidebaroption active Icon={ PeopleOutlineIcon } Text="Communities"/>
        </Customlink>
        <Customlink to={"/home/notification"}> 
        <Sidebaroption active Icon={ DoneOutlineIcon} Text="Verified"/>
        </Customlink>
        <Customlink to={"/home/profile"}> 
        <Sidebaroption active Icon={ Person2Icon} Text="Profile"/>
        </Customlink>
        <Customlink to={"/home/more"}> 
        <Sidebaroption active Icon={ MoreHorizIcon} Text="More"/>
        </Customlink>
        <div className="butt">
        <Button variant="contained" className="post" sx={{width:250}}  > Post</Button> 
        <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button className="post"   aria-controls={openmenu?"basic-menu":undefined}
        aria-haspopup="true"
        aria-aria-expanded={openmenu?"true":undefined}
        onClick={handleclick}
        sx={{":hover":{bgcolor:"gray",color:"white"}}}> 
        <div style={{display:"flex",gap:3}}>
        <Avatar src=  { loginuser[0]?.profileImage?loginuser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}></Avatar>
        <div>
        <span className="user-info1">{email}</span><br/>
        <span className="user-info2">{loginuser[0]?.userName ? loginuser[0]?.userName :<span> @{displayname}</span> }  </span>
        </div>
         <MoreHorizIcon /> 
        </div>
        </Button>
        <Menu id="basic-menu" anchorEl={anchore1} open={openmenu} onClick={handleclose} onClose={handleclose}>
            <MenuItem>
            <div style={{display:"flex",gap:10}}>
        <Avatar src= { loginuser[0]?.profileImage?loginuser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}></Avatar>
        <div>
        <span style={{paddingLeft:10}}>{email}</span><br/>
        <span style={{paddingLeft:10}}>{loginuser[0]?.userName ? loginuser[0]?.userName : user?.displayName}</span>
        </div>
         <MoreHorizIcon /> 
        </div>
        </MenuItem>
         <Divider/>
         <MenuItem><span style={{paddingLeft:10}}>Add an Account</span><br/></MenuItem>
         <MenuItem onClick={handlelogout}><span style={{paddingLeft:10}}>Log out from an Account</span><br/></MenuItem>
        </Menu>
        </div>
         </div>
         

    );
 }
 export {Sidebar}