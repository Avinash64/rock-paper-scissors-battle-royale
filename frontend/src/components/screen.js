import React from 'react'
import { useState } from 'react';
import "./screen.css"
import { io } from 'socket.io-client'

const socket = io.connect("http://192.168.0.38:3001")

function Screen() {
    let [choice,setChoice] = useState("")
    let [name,setName] = useState("")
    
    const sendChoice = () => {
        socket.emit("send_message", {source:"game",name:name, choice:choice})
      };

      const choose = (choice) => {
        setChoice(choice)
        socket.emit("play", {source:"game",name:name, choice:choice})
      };
    
        return (
            <div className='screen'>
            <input className='name' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}
></input>
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