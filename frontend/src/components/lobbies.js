import React from 'react'
import "./lobbies.css"
import LobbyList from './lobbyList'
function Lobbies() {
  return (
    <div className='lobbiesPage'>
        <h1 className='title'>Lobbies</h1>
        <div className='lobbiesContainer'>
            <LobbyList/>
            <LobbyList/>
        </div>
    </div>
  )
}

export default Lobbies