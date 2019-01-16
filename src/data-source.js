export function generateQuestion() {
    // return Promise.resolve({
    //     question: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    //     answers: [
    //         "Hound - Afghan",
    //         "Frise",
    //         "Elkhound"
    //     ],
    //     correctAnswer: "Hound - Afghan"
    // })
    return getThreeBreeds()
}

const NUM_BREEDS = 3

function getThreeBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all').then(r => r.json()).then(obj => {
        const breeds = Object.keys(obj.message)
        const selection = []
        while (selection.length < NUM_BREEDS) {
            selection.push(breeds.splice(Math.floor(Math.random() * breeds.length), 1))
        }
        const correct = selection[Math.floor(Math.random() * NUM_BREEDS)]
        return fetch(`https://dog.ceo/api/breed/${correct}/images/random`).then(r => r.json())
            .then(obj => ({
                answers: selection,
                correctAnswer: correct,
                question: obj.message
            }))
    })
}