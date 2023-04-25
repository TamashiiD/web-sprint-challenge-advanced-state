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
export const BUTTON_ON = "BUTTON_ON"
export const BUTTON_OFF = "BUTTON_OFF"


export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return ({ type: MOVE_COUNTERCLOCKWISE })
}


export function selectAnswer(id) {
  return ({ type: SET_SELECTED_ANSWER, payload: id })
}

export function setMessage(message) {
  return ({ type: SET_INFO_MESSAGE, payload: message })
}

export function setQuiz() {
  return ({ type: SET_QUIZ_INTO_STATE })

}

export function inputChange(input, id, newTrueAnswer, newQuestion, newFalseAnswer) {
  return ({ type: INPUT_CHANGE, payload: input, payload2: id, payload3:newTrueAnswer, payload4:newQuestion, payload5:newFalseAnswer })
}


export const resetForm = (newQuestion, newTrueAnswer, newFalseAnswer) => dispatch => {

  axios.post("http://localhost:9000/api/quiz/new", { "question_text": newQuestion, "true_answer_text": newTrueAnswer, "false_answer_text": newFalseAnswer })
  .then((res) => dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`)))
  .catch(err => console.log(err))
  dispatch(reset())

}

const reset = () => {
  return({ type: RESET_FORM })
}

export const buttonOn = () => {
  return({type: BUTTON_ON})
}

export const buttonOff = () => {
  return({type: BUTTON_OFF})
}
// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  
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





