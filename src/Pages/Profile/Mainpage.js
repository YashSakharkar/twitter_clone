import React ,{ useEffect, useState }from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import"./Mainpage.css"
import { useNavigate } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Posts } from "../Posts";
import axios from "axios";
import { Editprofile } from "./Editprofile";
import { useLogginUser } from "../../hooks/useLogginUser";
import PlaceIcon from '@mui/icons-material/Place';
import Person3Icon from '@mui/icons-material/Person3';
import CakeIcon from '@mui/icons-material/Cake';
 const Mainpage =({user})=>{
     const navigate=useNavigate()
     const [isLoading,setIsLoading]=useState('')
     const[imageurl,setImageUrl]=useState('')
     const username=user?.email.split('@')[0];
     const[posts,setPosts]=useState([])
     const [loginuser]=useLogginUser()
     const name=loginuser[0]?.name
   //  console.log(loginuser?.profilepic)
 useEffect(()=>{
     
      fetch(`http://localhost:5000/post`)
      .then(res=>res.json()).then(data=> {
       // console.log(data)
       setPosts(data)
      })

 },[posts])
 const handlecoverimage=(e)=>{
   e.preventDefault()
   //setIsLoading(true)
   console.log('click')
   const image=e.target.files[0];
   const formdata=new FormData();
   formdata.set('image',image);
   axios.post("https://api.imgbb.com/1/upload?key=2ff4c459eb4c8b8ed4d7c5bdb063d953",formdata)
   .then(res=>{  
         const url=res.data.data.display_url;
         //console.log(url)
         const updateProfileImage={
            coverImage:url,
           email :user?.email
         }
         if(url){
            axios.patch(`http://localhost:5000/userUpdate/${user?.email}`,updateProfileImage)
         }
       console.log(res.data.data.display_url)
      // setIsLoading(false)
   }
       ).catch((error)=>{
           console.log(error)
           setIsLoading(false)
       })
 }
 const handleprofileimage=(e)=>{
   e.preventDefault()
   //setIsLoading(true)
   console.log('click')
   const image=e.target.files[0];
   const formdata=new FormData();
   formdata.set('image',image);
   axios.post("https://api.imgbb.com/1/upload?key=2ff4c459eb4c8b8ed4d7c5bdb063d953",formdata)
   .then(res=>{  
         const url1=res.data.data.display_url;
         console.log(url1)
         const updateProfilepic={
            email:user?.email,
            profileImage:url1
         }
         
         if(url1){
            axios.patch(`http://localhost:5000/userUpdate/${user?.email}`,updateProfilepic)
         }
       console.log(res.data.data.display_url)
      // setIsLoading(false)
   }
       ).catch((error)=>{
           console.log(error)
           setIsLoading(false)
       })
 }

    return(
  
      <div className="mainpage">
          <ArrowBackIcon className="arrowback" onClick={()=>{navigate('/home/homes')}}/>
          <h2 className="username" >{loginuser[0]?.userName}</h2>
         <div className="mainprofile">
            <div className="profilebio">
               <div>
                  <div className="coverimagecontainer">
                    <img src={loginuser[0]?. coverImage?loginuser[0]?.coverImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} alt="" className="coverimage"/>
                      <div className="imageicontweet">
                      <div className="hovercoverimage"> 
                         <label htmlFor="image" className="camera" > 
                         <CameraAltIcon className="cameraicon" />
                         </label>
                        <input type="file" className="imageinput" id="image"  onChange={handlecoverimage}/>
                        </div>
                      </div>
                  </div>
                  <br/>
                  <div className="avatarimage">
                      <div className="avtarconatiner">
                         <img src={ loginuser[0]?.profileImage?loginuser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} alt="" className="profileimage"/>
                          
                      <div className="hoveravatarimg">
                           <div className="imageicontweet">
                                  <label htmlFor="profileimage" className="profilecamera"> 
                                  <CameraAltIcon className="profilecameraicon"/>
                                  </label>
                                  <input type="file" className="imageinput" id="profileimage" onChange={handleprofileimage}/>
                            </div>
                      </div>
                      <div className="userinfo">
                          <div className="headerinfo">
                             <h5 className="header"> 
                              {name}
                             </h5>  
                             <Editprofile user={user} loginuser={loginuser}/>      
                          </div>  
                          <br/>
                             <br/>
                            <div className="infocontainer">
                              <div className="locationandlink">
                             <span className="info"> <Person3Icon className="info1"/> {loginuser[0]?.bio}</span>
                             <span className="info"> <PlaceIcon className="info1"/>{loginuser[0]?.location}</span> 
                             <span className="info"> <CakeIcon className="info1" style={{paddingRight:5,paddingLeft:10,fontSize:40}} />{loginuser[0]?.dob}</span> 
                             <span className="Tweetss">Tweets</span>
                              </div>
                          </div>
                          <br/>
                          </div>
                          <hr className="horizentalborder"/>
                      {
                       posts.map(p=><Posts id={p._id} p={p}/>)  
                      }
                     </div>  
                     
                  </div>
               </div>
 
          
          </div>
       </div>  
 
    </div> 
      
    );
 }
 export {Mainpage}