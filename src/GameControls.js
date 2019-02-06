import React from 'react'

export default class GameControls extends React.Component {
    blockInput = false
    timeoutHandle = null

    componentDidMount = () => {
        this.fetchQuestion()
        document.body.addEventListener("keydown", this.keyHandler)
    }

    componentDidUpdate = () => {
        this.blockInput = false
        if (this.props.isAnswerSupplied) {
            this.blockInput = true
            if (this.props.isAnswerCorrect) {
                this.fetchQuestion()
            } else {
                this.timeoutHandle = setTimeout(() => {
                    this.fetchQuestion()
                    this.clearHighlightTimeout()
                }, 2000)
            }
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.keyHandler)
    }

    keyHandler = (event) => {
        switch (event.code) {
            case "KeyA":
                this.handleAnswer(this.props.answers[0])
                break
            case "KeyS":
                this.handleAnswer(this.props.answers[1])
                break
            case "KeyD":
                this.handleAnswer(this.props.answers[2])
                break
            default:
                return
        }
    }

    handleAnswer = (answer) => {
        if (!this.blockInput) {
            this.props.submitAnswer(answer)
        }
    }

    fetchQuestion = () => {
        this.props.newQuestion(this.props.questionParams).catch(() => {
            this.blockInput = false
        })
    }

    clearHighlightTimeout = () => {
        if (this.timeoutHandle !== null) {
            clearTimeout(this.timeoutHandle)
        }
        this.timeoutHandle = null
    }

    isCorrectAnswerHighlighted = () => {
        return !!(this.props.isAnswerSupplied && !this.props.isAnswerCorrect)
    }

    renderQuestion = (question) => {
        return <img className="dog-image" src={question} alt="Dog" />
    }

    renderAnswer = (answer) =>
        <button
            key={answer}
            className={`correct-${this.props.correctAnswer === answer}`}
            onClick={() => this.handleAnswer(answer)}>
            {answer}
        </button>

    render() {
        const { question, answers } = this.props
        return (
            <div>
                {this.renderQuestion(question)}
                <div className={`answers highlight-${this.isCorrectAnswerHighlighted()}`}>
                    {answers.map(this.renderAnswer)}
                </div>
            </div>
        )
    }
}