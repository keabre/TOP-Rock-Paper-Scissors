// DECLARING VARIABLES FOR ELEMENT CONTAINERS

const rockBtn = document.createElement('button')
const paperBtn = document.createElement('button')
const scissorsBtn = document.createElement('button')

const userComputerChoicePara = document.createElement('p')
const userComputerScorePara = document.createElement('p')
const roundResultPara = document.createElement('p')

const buttonContainer = document.querySelector('#button-container')
const resultsContainer = document.querySelector('#results')
const finalResultContainer = document.querySelector('#overall-result-container')

// APPEND ELEMENTS TO CONTAINERS

resultsContainer.appendChild(userComputerChoicePara)
resultsContainer.appendChild(roundResultPara)
resultsContainer.appendChild(userComputerScorePara)

// REVISITING ROCK PAPER SCISSORS LESSON

let gameCounter = 0

const buttonsList = [rockBtn, paperBtn, scissorsBtn]
const choiceNames = ['rock', 'paper', 'scissors']

buttonsList.forEach((button, i) => {
    button.setAttribute('name', choiceNames[i])
    button.textContent = choiceNames[i]
    buttonContainer.appendChild(button)
    button.addEventListener('click', () => {
        playSingleRound(choiceNames[i], getComputerChoice())
        gameCounter++
        console.log(gameCounter)
    })
    
})

// IMPLEMENT FUNCTION TO CHECK IF 5 GAMES HAVE BEEN PLAYED

function checkGamesPlayed() {
    if (gameCounter >= 5) {
        return 'END'
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

    if (checkGamesPlayed() === 'END') {
        buttonsList.forEach(button => {
            button.removeEventListener('click', () => {
                playSingleRound(choiceNames[i], getComputerChoice())
                gameCounter++
                console.log(gameCounter)
            })
        })
        displayEndGameMessage()
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

function displayEndGameMessage() {
    resultsContainer.textContent = `
    Thank you for playing!\n                             
    The final scores are:\n\n                             
    Your score: ${user_score}\n                           
    Computer score: ${computer_score}\n`

    let finalResult = ''
    if (user_score > computer_score) {
        finalResult = "You win! Congratulations"
    } else if (computer_score > user_score) {
        finalResult = "You lose! Better luck next time!"
    } else {
        finalResult = "It's a draw! No winners today!"
    }
                                
    
    finalResultContainer.textContent = finalResult


}


