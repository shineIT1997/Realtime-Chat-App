import React, {useEffect, useState} from 'react'
import "./Chat.css"
import io from 'socket.io-client'
import queryString from 'query-string'
import ScolltoBottom from 'react-scroll-to-bottom'

import InfoBar from '../infoBar/inforBar'
import InputMess from '../Input/input'
import Messages from '../messages-components/messages'

import onlineIcon from '../../assets/icon/onlineIcon.png'

const ENDPORT = 'localhost:3000' // server port

let socket;
socket = io(ENDPORT) //call to server
let arrMessFromServer = [] // recive message from server
let arrUsersFromServer = [] //get user from server

const Chat = ({ location }) => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState(queryString.parse(location.search).name); //name of user
  const [room, setRoom] = useState(queryString.parse(location.search).room); // room that user inside
  const [message, setMessage] = useState(''); //mess of user that will be sended to server
  const [arrMessage, setArrMessage] = useState([]); //mess from another user recived from server
  const [arrUsers, setArrUsers] = useState([]); //mess from another user recived from server

  socket.on('message',  (messageReturnFromServer) => {
    console.log('recive message');
    if(messageReturnFromServer !== arrMessFromServer[arrMessFromServer.length -1])
    setArrMessage(arrMessFromServer = [...arrMessFromServer, messageReturnFromServer]) 
    console.log(arrMessFromServer, 'arr');
  })

  socket.on('roomData', ({users}) => {
    if(arrUsersFromServer !== users)
    setArrUsers(arrUsersFromServer = users)
  })

  var changeMessage = (event) => {
    setMessage(event.target.value)
    setCount(count+1)
  }

  var sendMessage = (event) => {
    event.preventDefault()
    console.log('rere');
    if(message) {
      console.log('befor Send');
      socket.emit('sendMessage', {message}, () => {
        console.log('sendMess');
        console.log(arrMessage, 'insde sendMess');
      })
    }
    setMessage('')
  }



  useEffect(() => {
    console.log('effect ');
    socket.emit('join', {name, room}, (room) => {
    })


    console.log('re-render');
    return () => {
      socket.emit('disconnect')
      console.log("re-render dis");
      
      socket.off()
    }
  }, [ENDPORT, location.search , name])
    console.log(arrUsers);
    
  return (
    <div className="outerContainer">
      <ScolltoBottom className="users-onine">
        <h1>Users List:</h1>
        {arrUsers.map((u, i) => <div key={i}>
          <img className="onlineIcon" src={onlineIcon} alt="online icon" /> {u.name}</div>)}
      </ScolltoBottom>
      <div className="container">
          <InfoBar room={room} />
          <Messages arrMessage={arrMessage} name={name}/>
          <InputMess message={message} changeMessage={changeMessage} sendMessage={sendMessage}></InputMess>
      </div>
    </div>
    // <div>
    //   <input onChange={changeMessage}
    //           onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}></input>
    //   <h1>Chat component</h1>
    // </div>
  )
}

export default Chat
