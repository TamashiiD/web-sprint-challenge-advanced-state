import React, { useState } from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'


// export default 
function Wheel(props) {
const { moveClockwise, moveCounterClockwise} = props
const [initialWheelState, setWheelState] = useState(0)
const [forward, setForward ] = useState(true)

const handleclockwise = () =>{
  moveClockwise();
    setWheelState(initialWheelState+1)
    if (initialWheelState === 5){
      setWheelState(0)
    }
  }
   

const handlecounterclock =()=>{
  moveCounterClockwise()
  setWheelState(initialWheelState-1)
  if (initialWheelState === 0){
    setWheelState(5) 
  }
}

  return (
    <div id="wrapper">
      <div id="wheel">
    

     {initialWheelState === 0 ? <div className="cog active" style={{ "--i": 0 }}>B</div>: <div className="cog" style={{ "--i": 0 }}></div>} 
     {initialWheelState === 1 ? <div className="cog active" style={{ "--i": 1 }}>B</div> : <div className="cog" style={{ "--i": 1 }}></div>}
     {initialWheelState === 2 ? <div className="cog active" style={{ "--i": 2 }}>B</div> : <div className="cog" style={{ "--i": 2 }}></div>}
     {initialWheelState === 3 ? <div className="cog active" style={{ "--i": 3 }}>B</div> : <div className="cog" style={{ "--i": 3 }}></div>}
     {initialWheelState === 4 ? <div className="cog active" style={{ "--i": 4 }}>B</div> : <div className="cog" style={{ "--i": 4 }}></div>}
     {initialWheelState === 5 ? <div className="cog active" style={{ "--i": 5 }}>B</div> : <div className="cog" style={{ "--i": 5 }}></div>}
  
  {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={handlecounterclock} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleclockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}


const mapStateToProps=(wheelState)=>{
 return( {initialWheelState : wheelState.initialWheelState})
}
export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)