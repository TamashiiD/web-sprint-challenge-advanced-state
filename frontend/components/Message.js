import React from 'react'
import { connect } from 'react-redux'

function Message(props) {
console.log(props)
  return ( <div id="message">
    {props.infoMessage.initialmessageState}
   </div>
  )}



export default connect(mstp => mstp, {})(Message)