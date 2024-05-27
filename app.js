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

// GET USER CHOICE

function getUserChoice() {
    let user_choice = ''
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

    return user_choice
}

// PLAYER SCORE VARIABLES  

let user_score = 0

let computer_score = 0

// PLAY SINGLE ROUND


function playSingleRound(user, computer) {
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

    console.log(`You chose: ${user}\nThe computer chose: ${computer}\n`)

    if (outcome === 'win') {
        console.log("You win!")
    } else if (outcome === 'lose') {
        console.log("Computer wins!")
    } else {
        console.log("It's a draw!")
    }

    console.log(`Your score: ${user_score}\nComputer score: ${computer_score}`)
}

playSingleRound(getUserChoice(), getComputerChoice())