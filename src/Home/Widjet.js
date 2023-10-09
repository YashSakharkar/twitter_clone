import React from "react";
import SearchIcon from '@mui/icons-material/Search';
 import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';
 import"./Widjet.css"
    const Widjet=()=>{
        return(
            <> 
            <div className="widjet"> 
            <div className="widjetcore"> 
               <div className="widjetinput">
                <SearchIcon className="widjet_searchicon"/>  
                <input type="tex" placeholder="searchtwitter"/>
               </div>
               <div className="widjet_container">
               <h2>What's Happening</h2>
               </div>
               <div className="embed"> 
               <TwitterTweetEmbed
  tweetId={'933354946111705097'}
  className="embed"/>
<TwitterTimelineEmbed  sourceType="profile" screenName="elonmusk" options={{height:400}}/>
</div>
              </div>  
              </div>
              </>
        );
    }
  export {Widjet}