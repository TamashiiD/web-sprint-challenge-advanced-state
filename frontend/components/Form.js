import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { turnoffthemessage2, buttonOff, inputChange, resetForm, buttonOn} from '../state/action-creators'
import axios from 'axios'

function Form(props) {
  const {showmessage, turnoffthemessage2, buttonOff, buttonOn, clickButton, newQuestion, newTrueAnswer, newFalseAnswer, inputChange, resetForm} = props



useEffect(()=>{
  turnoffthemessage2()
  },[])




  const handlenewquestion = (e) => {
    e.preventDefault()
    inputChange(e.target.value, e.target.id )
    if (newQuestion && newTrueAnswer && newFalseAnswer){
      buttonOn()
    }
    if (newQuestion === "" || newTrueAnswer === "" || newFalseAnswer ===""){
      buttonOff()

    }
  }

  const handleonSubmit = (evt) => {
    evt.preventDefault()
    resetForm(newQuestion, newTrueAnswer,newFalseAnswer)
   
   
  }
  

  return (
    <form id="form" onSubmit={handleonSubmit}>
      <h2>Create New Quiz</h2>
      <input value={newQuestion} maxLength={50}  onChange={handlenewquestion} id="newQuestion" placeholder="Enter question" />
      <input value={newTrueAnswer} maxLength={50}  onChange={handlenewquestion} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={newFalseAnswer} maxLength={50}  onChange={handlenewquestion} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={clickButton} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps=(state)=>{
return {

  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer,
  clickButton: state.form.clickButton,
  showmessage: state.correctAnswer.showmessage

}
}
export default connect(mapStateToProps, {turnoffthemessage2, inputChange, resetForm, buttonOn, buttonOff})(Form)
