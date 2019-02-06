const NUM_ANSWERS = 3

export function generateQuestion(params) {
    let {
        breeds,
        numBreeds
    } = params
    breeds = breeds.slice()
    return fetch('https://dog.ceo/api/breeds/list/all').then(r => r.json()).then(obj => {
        const numBreedsToAdd = numBreeds - breeds.length
        const allNewBreeds = Object.keys(obj.message).filter(breed => !breeds.includes(breed))
        const newBreeds = []
        if (allNewBreeds.length > 0) {
            for (let i = 0; i < numBreedsToAdd; i++) {
                newBreeds.push(allNewBreeds.splice(Math.floor(Math.random() * allNewBreeds.length), 1))
            }
            breeds.push(...newBreeds)
        }
        const answers = []
        while (answers.length < NUM_ANSWERS) {
            answers.push(breeds.splice(Math.floor(Math.random() * breeds.length), 1)[0])
        }
        answers.sort()
        const correctAnswer = answers[Math.floor(Math.random() * NUM_ANSWERS)]
        return fetch(`https://dog.ceo/api/breed/${correctAnswer}/images/random`).then(r => r.json())
            .then(obj => ({
                answers,
                correctAnswer,
                question: obj.message,
                newBreeds
            }))
    })
}