import React from 'react'
import { connect } from 'react-redux'
import { setQuiz, selectAnswer } from '../state/action-creators'

function Quiz(props) {

  const { initialSelectedAnswerStatea,initialSelectedAnswerStateb , initialQuizState, setQuiz, selectAnswer } = props

const handleclick =(e)=>{
  selectAnswer(e.target.id)
}

const handlesubmit = ()=>{
  setQuiz()
}

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        initialQuizState === true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button onClick={handleclick} id="answera">
                  {initialSelectedAnswerStatea}
                </button>
              </div>

              <div className="answer">
                An elephant
                <button onClick={handleclick} id="answerb">
                  {initialSelectedAnswerStateb}
                </button>
              </div>
            </div>

            <button onClick={handlesubmit} id="submitAnswerBtn">Submit answer</button>
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
    initialSelectedAnswerStateb: state.selectedAnswer.initialSelectedAnswerStateb
   }
}

export default connect(mapStateToProps, { setQuiz, selectAnswer })(Quiz)