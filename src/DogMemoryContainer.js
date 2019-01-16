import React from 'react'
import DogMemory from './DogMemory';
import { connect } from 'react-redux';
import { generateQuestion } from './data-source';

class DogMemoryContainer extends React.Component {
    submitAnswer = (answer) =>
        this.props.dispatch({
            type: "SUBMIT_ANSWER",
            payload: answer
        })

    newQuestion = () =>
        generateQuestion().then(q => this.props.dispatch({
            type: "NEW_CHALLENGE",
            payload: q
        }))

    render = () =>
        <DogMemory {...this.props}
            newQuestion={this.newQuestion}
            submitAnswer={this.submitAnswer} />
}

export default connect(state => state)(DogMemoryContainer)