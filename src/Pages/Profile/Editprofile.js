import React, { useState } from "react";
import"./Editprofile.css";
import { Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from "axios";
const style={
    position: 'absolute',
    top:'6%',
    left:'28%',
    translate:'translate(-50% ,-50%)',
    width:600,
    height:680,
    bgcolor:'background.paper',
    boxShadow:24,
    borderRadius:8
   }
const EditeChild=({dob ,setDob})=>
   {
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(<>
         <div className="birthday-section" onClick={handleOpen}>
            <text className="birthday-section">Edit</text>
         </div>
         <Modal
         hideBackdrop
         onClose={handleClose}  
         open= {open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={{...style,width:300,height:300,marginTop:20,marginLeft:20}}>
            <div className="editbirthday">
             <h4  style={{paddingLeft:40}}>Edit Birthday ?</h4>
             <span>This can be done only once</span>
             <br/>
             <br/>
             <input type="date" onChange={(e)=>setDob(e.target.value)}/>
             <button className="cancelbutton" onClick={()=>setOpen(false)}>Cancel</button>
            </div>

            </Box>
        </Modal>
    </>);
   }
const Editprofile =({user,loginuser} )=>{
 const[open,setOpen]=useState(false);
 const[name,setName]=useState('');
 const[bio,setBio]=useState('');
 const[location,setLocation]=useState('');
 const[website,setWebsite]=useState('');
 const[dob,setDob]=useState('');
    
   const handlesave=()=>{
const editinfo={
    name,bio,location,website,dob
}
console.log("click")
console.log(editinfo)
if(editinfo)
{
 axios.patch(`http://localhost:5000/userUpdate/${user?.email}`,editinfo)
setOpen(false)
}
 
   }
    
    return(<>
        <div >
        <button className="editbutton" onClick={()=>setOpen(true)}>EditProfile</button>
        <Modal
        open= {open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} className="Modal">
         <div className="header1">
         <IconButton onClick={()=>setOpen(false)}><CloseIcon/></IconButton>
         <h2 className="header-title">Edit profile</h2>
         <button className="savebtn" onClick={handlesave}>Save</button>
         </div>
         <form className="fillcontent">
         <span style={{fontWeight:"bold"}}>Name</span>
         <TextField className="textfeild" fullWidth  is="fullWidth" variant="filled" onChange={(e)=>{setName(e.target.value)}} defaultValue={loginuser[0]?.name?loginuser[0]?.name:" "}></TextField>
         <span style={{fontWeight:"bold"}}>Bio</span>
         <TextField className="textfeild" fullWidth  is="fullWidth" variant="filled" onChange={(e)=>{setBio(e.target.value)}} defaultValue={loginuser[0]?.bio?loginuser[0]?.bio:" "}></TextField>
         <span style={{fontWeight:"bold"}}>Location</span>
           <TextField className="textfeild" fullWidth  is="fullWidth" variant="filled" onChange={(e)=>{setLocation(e.target.value)}} defaultValue={loginuser[0]?.location?loginuser[0]?.location:" "}></TextField>
           <span style={{fontWeight:"bold"}}>Website</span>
         <TextField className="textfeild" fullWidth   is="fullWidth" variant="filled" onChange={(e)=>{setWebsite(e.target.value)}} defaultValue={loginuser[0]?.website?loginuser[0]?.website:" "}></TextField>
        </form>
         <div className="birthday">
         <span className="birthday" >Birth Date</span>
         <EditeChild dob={dob} setDob={setDob}/>
        </div>
         <div className="lastsection">
            {
                loginuser[0]?.dob ? <h4 className="lastsection"> { loginuser[0]?.dob} </h4>: <h4 className="lastsection"> {dob ? dob :"Add your Birthdate"}</h4>
            }
         </div>
         <div className="last-btn">
          <h4  className="lastsection" style={{paddingLeft:30,paddingBottom:20}}> Switch Proffesional</h4>
          <ChevronRightIcon />
         </div>
        </Box>
        </Modal>
        </div>
    </>);
}
export {Editprofile}