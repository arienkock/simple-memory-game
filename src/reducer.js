
const initialState = {
    currentChallenge: {
        question: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        answers: [
            "Hound - Afghan",
            "Frise",
            "Elkhound"
        ],
        correctAnswer: "Hound - Afghan"
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer