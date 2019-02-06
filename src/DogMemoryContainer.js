import React from 'react'
import DogMemory from './DogMemory';
import { connect } from 'react-redux';
import { generateQuestion } from './questions';

const mapStateToProps = (state) => ({
    controls: {
        isAnswerSupplied: !!state.suppliedAnswer,
        isAnswerCorrect: !!state.isSuppliedAnswerCorrect,
        correctAnswer: state.currentChallenge.correctAnswer,
        question: state.currentChallenge.question,
        answers: state.currentChallenge.answers,
        questionParams: state.difficultyLevel
    }
})

const mapDispatchToProps = (dispatch) => ({
    controlsActions: {
        submitAnswer: (answer) =>
            dispatch({
                type: "SUBMIT_ANSWER",
                payload: answer
            }),
        newQuestion: (questionParams) =>
            generateQuestion(questionParams).then(q => dispatch({
                type: "NEW_CHALLENGE",
                payload: q
            }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)((props) => <DogMemory {...props} />)
