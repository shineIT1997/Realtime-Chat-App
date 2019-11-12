import React from 'react'
import ScolltoBottom from 'react-scroll-to-bottom'
import { pure } from 'recompose'


import Message from './message/singleMessage'
import './messages.css'

//arrMassage is all message returned from socket server
//name userName

const messages = ({arrMessage, name}) => (
    (typeof arrMessage ) !== 'undefined' ?
    <ScolltoBottom className='messages'>
    {arrMessage.map((message, i) => <div key={i}><Message message={message} name={name}></Message></div>
    )}
    </ScolltoBottom>
    : <div>{typeof arrMessage}</div>
    
)


// const messages = ({arrMessage, name}) => {
//     console.log(arrMessage);
//     console.log(name);
    
//   return (
//     <div>
//       {}
//     </div>
//   )
// }

export default pure(messages)

