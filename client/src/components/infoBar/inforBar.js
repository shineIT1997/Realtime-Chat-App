import React from 'react'
import './inforBar.css'
import onlineIcon from '../../assets/icon/onlineIcon.png'
import closeIcon from '../../assets/icon/closeIcon.png'
function inforBar({room}) {
  return (
    <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3> <span>Room: </span> {room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
  )
}

export default inforBar
