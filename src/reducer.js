
const initialState = {
    currentChallenge: {
        question: null,
        answers: [],
        correctAnswer: null,
    },
    suppliedAnswer: null
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "NEW_CHALLENGE":
            return {
                ...state,
                currentChallenge: action.payload,
                suppliedAnswer: null
            }
        case "SUBMIT_ANSWER":
            return {
                ...state,
                suppliedAnswer: action.payload
            }
        default:
            return state
    }
}

export default reducer