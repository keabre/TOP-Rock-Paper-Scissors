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

// GET USER CHOICE

function getUserChoice() {
    let user_choice = ''
    let user_guess = prompt("Enter 'rock', 'paper', or 'scissors'\nOr enter 'q' to quit: ")

    while (
        user_guess !== "rock" &&
        user_guess !== "paper" &&
        user_guess !== "scissors"
    ) {
        if (user_guess === 'q') {
            user_choice = 'quit'
            return user_choice
        }
        user_guess = prompt(`'${user_guess}' is not a valid input. Enter 'rock', 'paper', or 'scissors'\nOr enter 'q' to quit: `)
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

// PLAY ENTIRE GAME

function playGame() {
    let counter = 0;

    while (counter < 5) {
        if (isQuit === true) {
            return
        }

        playSingleRound(getUserChoice(), getComputerChoice())
        counter++
    }

    console.log("Thank you for playing!")
    console.log("The final scores are: ")
    console.log(`Your score: ${user_score}`)
    console.log(`Computer score: ${computer_score}`)

    if (user_score > computer_score) {
        console.log("You win! Congratulations")
    } else if (computer_score > user_score) {
        console.log("You lose! Better luck next time!")
    } else {
        console.log("It's a draw! No winners today!")
    }
}

playGame()