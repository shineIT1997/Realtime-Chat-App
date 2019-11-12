import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    /**
     * set Name when input change
     */
    var changeName = (event) => {
      setName(event.target.value)
    }

    /**
     * set Room when input change
     */
    var changeRoom = (event) => {
      setRoom(event.target.value)
    }

    /**
     * check condition name and room, then join chat
     */
    var joinChat = (event) => (!name || !room)
     ? event.preventDefault(console.log('nhap ten')
    ) : null;
    
    useEffect(() => {

    })
  return (
    
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={changeName}></input></div>
        <div><input placeholder="Room" className="joinInput" type="text" onChange={changeRoom}></input></div>
        <Link onClick={joinChat} to={`/chat?name=${name}&room=${room}`}>
        <button className="button" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
