import React from 'react'
import { connect } from 'react-redux'

function Message(props) {

  return (
    <div id="message2">{props.message2}</div>
  )
}



export default connect(mstp => mstp, {})(Message)