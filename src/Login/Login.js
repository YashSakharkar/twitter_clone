import React  from "react";
import"./Login.css";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
 

const Login=()=>
{
   
    const navigate=useNavigate();
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const Googlesubmit=(e)=>{
       e.preventDefault()
     signInWithGoogle(googleuser);
     if(googleuser)
     {
      console.log(googleuser)
      navigate("/home/homes")
   }
     
    }
      
     
    return(
     
       
       <div className="conatiner">
            <div className="image-container">
                <img className="img1"src="./x.png" />
            </div>
         <div className="sign-conatiner">
         <div className="sign-cont-2">
            <h1 style={{paddingRight:53}}> Happening now</h1>
            <br/>
            <br/>
            <h3>Join twitter today</h3>
             <br/>
             <button className="btn1" style={{fontWeight:"bold"}} onClick={Googlesubmit}><img className="logo"src="./google.png"/>&nbsp;&nbsp;Sign up with Google</button>
             <br/>
             <br/>
             <br/>
              <button className="btn1" style={{fontWeight:"bold"}}  ><img className="logo"src="./apple.jpg"/>&nbsp;&nbsp;Sign up with Apple</button>
               <br/>
              <br/>
              <p style={{fontSize :16,textAlign :"left",paddingLeft:200}}> or</p> 
             <button className="btn1 " style={{backgroundColor:"#4285f4",color:"white"}} onClick={(e)=>{ navigate("/CreateAccount");e.preventDefault()}}   >create account</button> <br/>
             <br/>
             <p> By signing up, you agree to the Terms of Service and Privacy Policy<br/>, including Cookie Use.</p>
             <br/>
             
          <p style={{fontSize:14,fontWeight:"bold"}}> Already have an account ?</p>   
              
             <button className="btn1" style={{color:"blue",fontWeight:"bold"}} onClick={()=>{ navigate("/singin")}}>Sign in</button>
        
         </div>
         </div>
       </div> 
    );

}
export default Login;
