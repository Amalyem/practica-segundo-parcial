import React from "react";
import "../styles/Boton.css";
import { useState } from "react";
function Boton(){
    const [timer, setTimer]=useState(0);
    c
    const startTimer=()=>{
        window.myTimer =setInterval(()=>{
            setTimer((timer)=>timer+1);
        },1000)
    };
    const stoptTimer=()=>{
        clearInterval(window.myTimer);
    } 
    const resetTimer = () => {
        clearInterval(window.myTimer);
        setTimer(0);
      };
      return (
        <div className="container">
          <h1>Timer</h1>
          <span>{Math.trunc(timer / 60)} mins </span>
          <span>{timer % 60} secs</span>
          <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      );
}
export default Boton;