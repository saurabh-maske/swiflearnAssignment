import React from 'react';
import "./style.css"
import Icon from "./icon"
const Header=()=>{
    return(
        <div>
    
<div style={{display:"flex",flexWrap:"wrap",marginLeft:"56%",justifyContent:"space-evenly"}}>
<Icon/>
   <div className="nav1" >Live Consultation</div>
   <div className="nav"> Buy plans</div>
   <div className="nav"> View Plans</div>
   <button class="btn peach-gradient">Log In</button>
  </div> 
</div>
    )
}
export default Header