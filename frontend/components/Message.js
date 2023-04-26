import React from 'react'
import { connect } from 'react-redux'

function Message(props) {


console.log(props.infoMessage.showmessage, props.infoMessage.initialMessageState)
  return ( <div>
    {/* {props.correctAnswer.showmessage && <div id="message"> {props.correctAnswer.testresponse}</div>} */}
{props.infoMessage.showmessage ? (<div id="message">Congrats: {props.infoMessage.initialMessageState} is a great question!</div>): ""}
   </div>
  )}



export default connect(mstp => mstp, {})(Message)