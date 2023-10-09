import React, { useState } from "react";
 import"./Sidebaroption.css"
import { colors } from "@mui/material";
import { blue } from "@mui/material/colors";
    const Sidebaroption=({active,Icon,Text})=>{
       
        return(        
          <div   className={`Side ${active && 'Side_active'}`}  > 
           <Icon /><span  className="iconinfo1">{Text}</span>  
            </div>       
        );
    }
  export {Sidebaroption}