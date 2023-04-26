// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Wheel from './Wheel'
import Quiz from './Quiz'
import Message from './Message'
import Form from './Form'

// REDUX IMPORTS
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import reducer, {form,infoMessage, selectedAnswer,quiz, wheel } from '../state/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import {setQuiz, fetchQuiz } from '../state/action-creators'
import { connect } from 'react-redux'

// REDUX STORE



let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}
resetStore()






export function App(props) {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Message />
        <h1>Advanced State</h1>
        <nav>
          <NavLink id="wheelLink" to="/">Wheel</NavLink>
          <NavLink id="quizLink" to="/quiz" >Quiz</NavLink>
          <NavLink id="formLink" to="/quiz-new">Form</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Wheel />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz-new" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App