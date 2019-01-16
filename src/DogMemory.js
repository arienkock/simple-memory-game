import React from 'react'

export default class DogMemory extends React.Component {
    renderAnswer = (answer) => <button>{answer}</button>

    render() {
        const { question, answers } = this.props.currentChallenge
        return (
            <div>
                <img src={question} />
                <div className="answers">
                    {
                        answers.map(this.renderAnswer)
                    }
                </div>
            </div>
            )
    }
}

