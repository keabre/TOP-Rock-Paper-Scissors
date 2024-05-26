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