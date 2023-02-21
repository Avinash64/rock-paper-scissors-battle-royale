import React from 'react'
import { useState, useEffect } from 'react';
import "./screen.css"
import { io } from 'socket.io-client'

const socket = io.connect("https://rpsbr.onrender.com")

function Screen() {
    let [choice,setChoice] = useState("")
    let [name,setName] = useState("")
    let [result,setResult] = useState("")
    
    const sendChoice = () => {
        socket.emit("send_message", {source:"game",name:name, choice:choice})
      };


  useEffect(() => {
    socket.on("result", (result) =>{
    setResult(result)
    console.log(result)
    }
    )

  },[socket])

      const choose = (choice) => {
        setChoice(choice)
        socket.emit("play", {source:"game",name:name, choice:choice})
      };
    
        return (
            <div className='screen'>
            <input className='name' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}
></input>
            {result}
            {choice}
            <div className='choices'>
            <button className='choice' onClick={()=>choose("r")}>Rock</button>
            <button className='choice' onClick={()=>choose("p")}>Paper</button>
            <button className='choice' onClick={()=>choose("s")}>Scissor</button>
            </div>            
            </div>
  )
}

export default Screen