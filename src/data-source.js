export function generateQuestion() {
    return Promise.resolve({
        question: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        answers: [
            "Hound - Afghan",
            "Frise",
            "Elkhound"
        ],
        correctAnswer: "Hound - Afghan"
    })
}