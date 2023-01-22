import React from 'react'
import "./lobby.css"
import Chat from './chat'
import Screen from './screen'

function Lobby() {
  return (
    <div className='lob'> 
    <div className='ch'>    
    <Chat></Chat>
    </div>

    <Screen></Screen>
    </div>
  )
}

export default Lobby