// GET COMPUTER CHOICE

let computer_choice = ''

function getComputerChoice() {
    
    let random_number
    random_number = Math.floor(Math.random() * 3) + 1
    
    if (random_number === 1) {
        computer_choice = "rock"
    } else if (random_number === 2) {
        computer_choice = "paper"
    } else {
        computer_choice = "scissors"
    }
}

// GET USER CHOICE

let user_choice = ''

function getUserChoice() {
    let user_guess = prompt("Enter 'rock', 'paper', or 'scissors': ")

    while (
        user_guess !== "rock" &&
        user_guess !== "paper" &&
        user_guess !== "scissors"
    ) {
        user_guess = prompt(`'${user_guess}' is not a valid input. Enter 'rock', 'paper', or 'scissors': `)
    }

    if (user_guess === 'rock') {
        user_choice = 'rock'
    } else if (user_guess === 'paper') {
        user_choice = 'paper'
    } else {
        user_choice = 'scissors'
    }
}

// PLAYER SCORE VARIABLES  

let user_score = 0

let computer_score = 0

// PLAY SINGLE ROUND


function playSingleRound() {
    let outcome = ''
    if (user_choice === "rock") {
        if (computer_choice === "rock") {
            outcome = 'draw'
        } else if (computer_choice === "paper") {
            computer_score++
            outcome = 'lose'
        } else {
            user_score++
            outcome = 'win'
        }

    } else if (user_choice === "paper") {
        if (computer_choice === "rock") {
            user_score++
            outcome = 'win'
        } else if (computer_choice === "paper") {
            outcome = 'draw'
        } else {
            computer_score++
            outcome = 'lose'
        }
    } else {
        if (computer_choice === "rock") {
            computer_score++
            outcome = 'lose'
        } else if (computer_choice === "paper") {
            user_score++
            outcome = 'win'
        } else {
            outcome = 'draw'
        }
    }

    console.log(`You chose: ${user_choice}\nThe computer chose: ${computer_choice}\n`)

    if (outcome === 'win') {
        console.log("You win!")
    } else if (outcome === 'lose') {
        console.log("Computer wins!")
    } else {
        console.log("It's a draw!")
    }

    console.log(`Your score: ${user_score}\nComputer score: ${computer_score}`)
}

getComputerChoice()
getUserChoice()
playSingleRound()