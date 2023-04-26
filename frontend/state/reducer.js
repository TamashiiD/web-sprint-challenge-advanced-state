// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { UPDATE_QUIZ, BUTTON_OFF, SET_SELECTED_ANSWER, SET_QUIZ_INTO_STATE, INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, BUTTON_ON, SET_ANSWER_STATE, SUBMIT } from './action-creators'



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

const quizState = { initialQuizState: true }
function quiz(state = quizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return ({ initialQuizState: true })

    default:
      return state
  }

}

const answer = {
  initialSelectedAnswerStatea: "Select",
  initialSelectedAnswerStateb: "Select",
  submitbuttonon: true
}
function selectedAnswer(state = answer, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      if (action.payload === "answera") {
        return { initialSelectedAnswerStatea: "Selected", initialSelectedAnswerStateb: "Select" }
      }
      if (action.payload === "answerb") {
        return { initialSelectedAnswerStatea: "Select", initialSelectedAnswerStateb: "Selected" }
      }
    case SUBMIT:
      if (initialSelectedAnswerStatea === "Selected" || initialSelectedAnswerStateb === "Selected"){
        return ({...state, submitbuttonon: false})
      }
    default:
      return state
  }
}

const initialMessageState = ""
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return (action.payload)

    default:
      return state
  }

}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
  clickButton: true

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
    case BUTTON_ON:
      return ({ ...state, clickButton: false })
    case BUTTON_OFF:
      return ({ ...state, clickButton: true })


    case RESET_FORM:
      return initialFormState
    default:
      return state
  }

}
const initialupdatestate = {
  answer1: "",
  answer2: "",
  question: "",
  answer1id: "0VEv0",
  answer2id: "",
  quizid: "LVqUh"
}
function updateQuiz(state = initialupdatestate, action) {
  switch (action.type) {
    case UPDATE_QUIZ:
      return ({ ...state, answer1: action.payload, answer2: action.payload2, question: action.payload3, answer1id: action.payload4, answer2id: action.payload5, quizid: action.payload6 })
    default:
      return state
  }
}


const correctAnswerState ={
  correct: "",
incorrect: "",
}
function correctAnswer(state = correctAnswerState, action) {
  switch (action.type) {
    case SET_ANSWER_STATE:
      if(action.payload === correct){
        return ({...state, correct: action.payload})
      }
      if(action.payload === incorrect){
        return ({...state, incorrect: action.payload})
      }
      

    default:
      return state
  }

}


export default combineReducers({ correctAnswer, updateQuiz, wheel, quiz, selectedAnswer, infoMessage, form })
