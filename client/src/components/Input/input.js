import React from 'react'


import './input.css'
import SendIcon from '../../assets/icon/sendicon.png'

const input = ({changeMessage, sendMessage, message}) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={changeMessage}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}><img className="sendIcon" src={SendIcon}></img></button>
    </form>
  )
}

export default input
