import {React, useEffect, useState} from 'react'
import "./welcome.css"
import { useNavigate } from 'react-router-dom'
import {io} from "socket.io-client"


// const socket = io("http://localhost:3001")



// socket.emit("updatedName", "bruh")
function Welcome() {
  let navigate = useNavigate();
  const [name,setname] = useState("")
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    // socket.on('connect', () => {
    //   setIsConnected(true);
    //   console.log(`you connected with id: ${socket.id}`)
    // });

    // socket.on('disconnect', () => {
    //   setIsConnected(false);
    // });
  }, []);


  const sendPing = () => {
    // var a = name
    // // console.log({name})
    // socket.emit("updatedName", name);
  }
  return (
    <div className='welcomePage'>
        <input id="name" className='nameField'
        placeholder='Enter Name'
        onChange={(e) => setname(e.target.value)}
        ></input>
        
        
        <button className='enter' 
        onClick={() => navigate("/lobby")}
        // onClick={sendPing}
        >
          
          Drop in</button>
    </div>
  )
}

export default Welcome