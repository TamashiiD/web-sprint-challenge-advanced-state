import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

export function Form(props) {


  
const [newquestion, setNewQuestion] = useState("")
const [trueanswer, setTrueAnswer] = useState("")
const [falseanswer, setFalseAnswer] = useState("")




  const handlenewquestion = e => {
      setNewQuestion( e.target.value)
  }

const handletrue = (e)=>{
setTrueAnswer(e.target.value)
}

const handlefalse = e=>{
setFalseAnswer(e.target.value)
}

  const handleonSubmit = evt => {
    evt.preventDefault()
    axios.post("http://localhost:9000/api/quiz/new", { "question_text": newquestion, "true_answer_text": trueanswer, "false_answer_text": falseanswer})
    .then((res)=> console.log(res) )
    .catch(err=> console.log(err))
    setTrueAnswer("");
    setFalseAnswer("");
    setNewQuestion("");
  }

  return (
    <form id="form" onSubmit={handleonSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={newquestion} onChange={handlenewquestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={trueanswer} onChange={handletrue} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={falseanswer} onChange={handlefalse} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
const mapStateToProps=(state)=>{
return ({

  newQuestion: state.newQuestion,
  newTrueAnswer: state.newTrueAnswer,
  newFalseAnswer: state.newFalseAnswer,

})
}
export default connect(mapStateToProps, {})(Form)
