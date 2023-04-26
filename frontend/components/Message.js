import React from 'react'
import { connect } from 'react-redux'

function Message(props) {



  return ( <div>
    {/* {props.correctAnswer.showmessage && <div id="message"> {props.correctAnswer.testresponse}</div>} */}
{props.infoMessage.showmessage ? (<div id="message">{props.infoMessage.initialMessageState}</div>): ""}
   </div>
  )}



export default connect(mstp => mstp, {})(Message)