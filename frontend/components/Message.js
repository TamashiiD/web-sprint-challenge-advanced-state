import React from 'react'
import { connect } from 'react-redux'

function Message(props) {
  return ( 
    
<div id="message">  
That was the correct answer 
 {props.infoMessage.showmessage ? props.infoMessage.initialmessageState : props.correctAnswer.testresponse}
   </div>
  )}



export default connect(mstp => mstp, {})(Message)