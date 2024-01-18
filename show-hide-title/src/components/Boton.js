import React from "react";
import "../styles/Boton.css";
import { useState } from "react";
function Boton(){
    const[show,setShow]=useState(true);
    return(
        <div className="container">
<button onClick={()=>setShow((show)=>!show)}>show/hide</button>
        {show?<h1> welcome to react challenge</h1>:null}
        </div>
         
    );
}
export default Boton;