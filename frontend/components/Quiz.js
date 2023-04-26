import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { turnoffthemessage, postanAnswer, sumbitButton, updateQuiz, fetchQuiz, setQuiz, selectAnswer, setMessage,  } from '../state/action-creators'
import axios from 'axios'

function Quiz(props) {

  const { turnoffthemessage, postanAnswer , sumbitButton, submitbuttonon, updateQuiz, quizid, answer1id, answer2id, answer1, answer2, question,fetchQuiz, setMessage, initialSelectedAnswerStatea,initialSelectedAnswerStateb , initialQuizState, setQuiz, selectAnswer } = props

 
   const quizstate = (initialQuizState) => {
    if(initialQuizState === false){
      useEffect(()=>{
        axios.get("http://localhost:9000/api/quiz/next")
           .then(res => {updateQuiz(res.data.answers[0].text, res.data.answers[1].text, res.data.question, res.data.answers[0].answer_id, res.data.answers[1].answer_id, res.data.quiz_id);
            setQuiz();
            turnoffthemessage()})
           .catch(err=> console.log(err))}
         ,[]);
        
    }
   }

const handleclick =(e)=>{
  selectAnswer(e.target.id)
  sumbitButton()
}

const handlesubmit = (e)=>{
  e.preventDefault()
  fetchQuiz() 
  postanAnswer(initialSelectedAnswerStatea, initialSelectedAnswerStateb, quizid, answer1id, answer2id)
  setQuiz()
 
}

quizstate(initialQuizState)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        initialQuizState === true ? (
          <>
            {question.length >=1 ? <h2>{question}</h2>:<h2>What is a closure?</h2>}
        
            <div id="quizAnswers">
              <div className={initialSelectedAnswerStatea === "SELECTED" ? "answer selected" : "answer"}> 
                 {answer1.length >=1 ? <h3>{answer1}</h3> : <h3>A function</h3>}
                <button onClick={handleclick} id="answera">
                  {initialSelectedAnswerStatea}
                </button>
              </div>

              <div className={initialSelectedAnswerStateb === "SELECTED" ? "answer selected" : "answer"}>
              {answer2.length >=1 ? <h3>{answer2}</h3> : <h3>An elephant</h3>}
                <button onClick={handleclick} id="answerb">
                  {initialSelectedAnswerStateb}
                </button>
              </div>
            </div>

            <button onClick={handlesubmit} disabled={submitbuttonon} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return { 
    initialQuizState: state.quiz.initialQuizState,
    initialSelectedAnswerStatea: state.selectedAnswer.initialSelectedAnswerStatea,
    initialSelectedAnswerStateb: state.selectedAnswer.initialSelectedAnswerStateb,
    answer1: state.updateQuiz.answer1,
    answer2: state.updateQuiz.answer2,
    question: state.updateQuiz.question,
    answer1id: state.updateQuiz.answer1id,
    answer2id: state.updateQuiz.answer2id,
    quizid: state.updateQuiz.quizid,
    submitbuttonon: state.selectedAnswer.submitbuttonon
    
   }
}

export default connect(mapStateToProps, {turnoffthemessage, postanAnswer, sumbitButton, updateQuiz, setMessage, setQuiz, selectAnswer, fetchQuiz })(Quiz)