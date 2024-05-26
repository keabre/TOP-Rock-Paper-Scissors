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