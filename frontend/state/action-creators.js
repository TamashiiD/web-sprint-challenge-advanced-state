// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios"
import { connect } from "react-redux"

// ❗ You don't need to add extra action types to achieve MVP
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'


export function moveClockwise() {
  return({type:MOVE_CLOCKWISE })
 }

export function moveCounterClockwise() {
  return({type:MOVE_COUNTERCLOCKWISE })
 }


export function selectAnswer(id) { 
  return({type: SET_SELECTED_ANSWER, payload: id})
}

export function setMessage() { }

export function setQuiz() { 
  return ({type: SET_QUIZ_INTO_STATE})

}

export function inputChange(input, id) {
  return({type:INPUT_CHANGE , payload: input, payload2: id})
 }


export function resetForm(newQuestion, newTrueAnswer, newFalseAnswer) {

  const data = { "question_text": newQuestion, "true_answer_text": newTrueAnswer, "false_answer_text": newFalseAnswer}
  console.log(data)
    axios.post("http://localhost:9000/api/quiz/new", data)
    .then((res)=> console.log(res) )
    .catch(err=> console.log(err.response.data.message))
    return ({type:RESET_FORM})
 }

 

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state





