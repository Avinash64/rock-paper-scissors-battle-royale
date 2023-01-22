import React from 'react'
import { useEffect, useState } from 'react'
import "./chat.css"
import { io } from 'socket.io-client'

const socket = io.connect("http://192.168.0.38:3001")

let chatlist = [
  {"name":"aq" , "message":"ur white"},
  {"name":"av" ,"message":"yeet"},
  {"name":"vas" , "message":"magic"},
]

let a = []
chatlist.map((mes, index) => {a.push(
  <div key={index}> {mes.name} : {mes.message} </div>)
})

function Chat() {
  let [message,setMessage] = useState("")
  const [messageGot,setMessageGot] = useState({})

  const sendMessage = () => {
    socket.emit("send_message", {name:"bruh", message: message})
  };

  useEffect(() => {
    socket.on("receive_message", (data) =>{
    setMessageGot(data)
    console.log(messageGot)
    }
    )

  },[socket])

  return (
    <div className='chat'>
    <div>{a}</div>
    <input className='sentTxt'
    onChange={(e) => setMessage(e.target.value)}
    ></input>
    <button className='send' onClick={sendMessage}>Send</button>

    {messageGot.message}
    </div>
  )
}

export default Chat