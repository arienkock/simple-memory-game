import React from 'react'

export default class DogMemory extends React.Component {
    componentDidMount() {
        this.props.newQuestion()
    }

    componentDidUpdate() {
        if (this.props.suppliedAnswer) {
            if (this.props.suppliedAnswer === this.props.currentChallenge.correctAnswer) {
                this.props.newQuestion()
            } else {
                setTimeout(() => {
                    this.props.newQuestion()
                }, 2000)
            }
        }
    }

    shouldHighLightCorrectAnswer = () => {
        return !!(this.props.suppliedAnswer && this.props.suppliedAnswer !== this.props.currentChallenge.correctAnswer)
    }

    renderAnswer = (answer) =>
        <button
            className={`correct-${answer === this.props.currentChallenge.correctAnswer}`}
            onClick={() => this.props.submitAnswer(answer)}>
            {answer}
        </button>

    render() {
        const { question, answers } = this.props.currentChallenge
        const highlight = this.shouldHighLightCorrectAnswer()
        return (
            <div>
                <img src={question} />
                <div className={`answers highlight-${highlight}`}>
                    {
                        answers.map(this.renderAnswer)
                    }
                </div>
            </div>
        )
    }
}

