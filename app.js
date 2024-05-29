// DECLARING VARIABLES FOR ELEMENT CONTAINERS

const rockBtn = document.createElement('button')
const paperBtn = document.createElement('button')
const scissorsBtn = document.createElement('button')

const userComputerChoicePara = document.createElement('p')
const userComputerScorePara = document.createElement('p')
const roundResultPara = document.createElement('p')

const buttonContainer = document.querySelector('#button-container')
const resultsContainer = document.querySelector('#results')

// APPEND ELEMENTS TO CONTAINERS

resultsContainer.appendChild(userComputerChoicePara)
resultsContainer.appendChild(roundResultPara)
resultsContainer.appendChild(userComputerScorePara)

// IMPLEMENT FUNCTION FOR CHECK QUIT

let isQuit = false

function checkQuit(user_input) {
    if (user_input === 'quit') {
        return true
    } else {
        return false
    }
}

// GET COMPUTER CHOICE

function getComputerChoice() {
    let computer_choice = ''
    let random_number
    random_number = Math.floor(Math.random() * 3) + 1
    
    if (random_number === 1) {
        computer_choice = "rock"
    } else if (random_number === 2) {
        computer_choice = "paper"
    } else {
        computer_choice = "scissors"
    }

    return computer_choice
}

// PLAYER SCORE VARIABLES  

let user_score = 0

let computer_score = 0

// PLAY SINGLE ROUND


function playSingleRound(user, computer) {

    if (checkQuit(user) === true) {
        console.log("Thank you for playing!")
        console.log("Quitting game...")
        isQuit = true
        return
    }

    let outcome = ''
    if (user === "rock") {
        if (computer === "rock") {
            outcome = 'draw'
        } else if (computer === "paper") {
            computer_score++
            outcome = 'lose'
        } else {
            user_score++
            outcome = 'win'
        }

    } else if (user === "paper") {
        if (computer === "rock") {
            user_score++
            outcome = 'win'
        } else if (computer === "paper") {
            outcome = 'draw'
        } else {
            computer_score++
            outcome = 'lose'
        }
    } else {
        if (computer === "rock") {
            computer_score++
            outcome = 'lose'
        } else if (computer === "paper") {
            user_score++
            outcome = 'win'
        } else {
            outcome = 'draw'
        }
    }

    userComputerChoicePara.textContent = `You chose: ${user}\nThe computer chose: ${computer}\n`

    if (outcome === 'win') {
        roundResultPara.textContent = 'You win!'
    } else if (outcome === 'lose') {
        roundResultPara.textContent = 'Computer wins!'
    } else {
        roundResultPara.textContent = "It's a draw!"
    }

    userComputerScorePara.textContent = `Your score: ${user_score}\nComputer score: ${computer_score}`
}

// PLAY ENTIRE GAME

// function playGame() {
//     let counter = 0;

//     while (counter < 5) {
//         if (isQuit === true) {
//             return
//         }

//         playSingleRound(getUserChoice(), getComputerChoice())
//         counter++
//     }

//     console.log("Thank you for playing!")
//     console.log("The final scores are: ")
//     console.log(`Your score: ${user_score}`)
//     console.log(`Computer score: ${computer_score}`)

//     if (user_score > computer_score) {
//         console.log("You win! Congratulations")
//     } else if (computer_score > user_score) {
//         console.log("You lose! Better luck next time!")
//     } else {
//         console.log("It's a draw! No winners today!")
//     }
// }

// playGame()

// REVISITING ROCK PAPER SCISSORS LESSON

const buttonsList = [rockBtn, paperBtn, scissorsBtn]
const choiceNames = ['rock', 'paper', 'scissors']
let currentChoice = ''

buttonsList.forEach((button, i) => {
    button.setAttribute('name', choiceNames[i])
    button.textContent = choiceNames[i]
    button.addEventListener('click', () => {
        playSingleRound(choiceNames[i], getComputerChoice())
    })
    buttonContainer.appendChild(button)
})
