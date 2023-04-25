// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { SET_SELECTED_ANSWER, SET_QUIZ_INTO_STATE, INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM } from './action-creators'



const wheelState = { initialWheelState: 0 }

function wheel(state = wheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      if (state.initialWheelState === 5) {
        return ({ initialWheelState: 0 })
      }
      else {
        return ({ initialWheelState: state.initialWheelState + 1 })
      }
    case MOVE_COUNTERCLOCKWISE:
      if (state.initialWheelState === 0) {
        return ({ initialWheelState: 5 })
      }
      else {
        return ({ initialWheelState: state.initialWheelState - 1 })
      }

    default:
      return state
  }
}

const quizState = {initialQuizState: true}
 function quiz(state = quizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
    return ({initialQuizState: false})

    default:
      return state
  }

}

const answer = {initialSelectedAnswerStatea: "Selected",
  initialSelectedAnswerStateb: "Select"}
  function selectedAnswer(state = answer, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
    if (action.payload === "answera"){
      return {initialSelectedAnswerStatea: "Selected", initialSelectedAnswerStateb: "Select"}
    }
    if (action.payload ==="answerb"){
      return {initialSelectedAnswerStatea: "Select", initialSelectedAnswerStateb: "Selected"}
    }
    
    default:
  return state
  }
}

const initialMessageState = {message : ''}
 function infoMessage(state = initialMessageState, action) {

  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
  
}
function form(state = initialFormState, action) {
  switch (action.type) {

    case INPUT_CHANGE:
      if (action.payload2 === "newQuestion") {
        return ({ ...state, newQuestion: action.payload });
      }
      if (action.payload2 === "newTrueAnswer") {
        return ({ ...state, newTrueAnswer: action.payload });
      }
      if (action.payload2 === "newFalseAnswer") {
        return ({ ...state, newFalseAnswer: action.payload });
      }
    case RESET_FORM:
      return initialFormState

    default:
      return state
  }

}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
