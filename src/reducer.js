const initialChallenge = {
    question: null,
    answers: [],
    correctAnswer: null,
}

const initialState = {
    currentChallenge: initialChallenge,
    suppliedAnswer: null,
    isSuppliedAnswerCorrect: undefined,
    difficultyLevel: {
        breeds: [],
        numBreeds: 3
    },
    stats: {
        numCorrect: 0,
        numTotal: 0,
        streak: 0
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "NEW_CHALLENGE":
            const {newBreeds} = action.payload
            const {breeds} = state.difficultyLevel
            return {
                ...state,
                currentChallenge: { initialChallenge, ...action.payload },
                suppliedAnswer: null,
                isSuppliedAnswerCorrect: undefined,
                difficultyLevel: {
                    ...state.difficultyLevel,
                    breeds: newBreeds.length > 0  ? breeds.concat(newBreeds) : breeds
                }
            }
        case "SUBMIT_ANSWER":
            const suppliedAnswer = action.payload
            const isSuppliedAnswerCorrect = suppliedAnswer === state.currentChallenge.correctAnswer
            const streak = isSuppliedAnswerCorrect ? state.stats.streak + 1 : 0
            const levelUp = streak > 0 && streak % 10 === 0
            return {
                ...state,
                suppliedAnswer,
                isSuppliedAnswerCorrect,
                difficultyLevel: {
                    ...state.difficultyLevel,
                    numBreeds: state.difficultyLevel.numBreeds + (levelUp ? 3 : 0)
                },
                stats: {
                    numCorrect: state.stats.numCorrect + (isSuppliedAnswerCorrect ? 1 : 0),
                    numTotal: state.stats.numTotal + 1,
                    streak
                }
            }
        default:
            return state
    }
}

export default reducer