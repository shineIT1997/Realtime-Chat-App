import React from 'react'
import { pure } from 'recompose';
import ReactEmoji from 'react-emoji';

import './singleMessage.css'


export default pure(function singleMessage({message: {user, text}, name}) {
  let isSentCurrentUser = false;
  const trimName = name.trim().toLowerCase()

  console.log(name, 'from Message');
  console.log(text, 'from text Message');
  
  if(user === trimName) {
    isSentCurrentUser = true
  }

  return(
    isSentCurrentUser
    ? 
      (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
    
    : (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10 ">{user}</p>
      </div>
    )
  )
})
