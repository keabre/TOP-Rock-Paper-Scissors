# PLANNING

## steps provided by The Odin Project as guidance


- write the logic to get the computer choice:
    Your game will be played against the computer. You will write a function that randomly returns "rock", "paper", "scissors".

- write the logic to get the human choice
    Your game will be played by a human player. You will write a function that takes the user choice and returns it.

- declare the player score variables
    Your game will keep track of the players score. You will write variables to keep track of the players score.

- write the logic to play a single round
    Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.

- write the logic to play the entire game
    Your game will play 5 rounds. You will write a function that plays 5 rounds, keeping track of the scores and declares a winner at the end.


## my understanding and plain English planning of provided instructions

### write the logic to get the computer choice

- create a function that generates a random choice by generating a random number between 1 and 3, which correspond to "rock", "paper", and "scissors" respectively and returns this value

### write the logic to get the human choice

- create a function that prompts the user to enter "rock", "paper", or "scissors"
- the user input will be validated to be exactly as specified from the program, or else it asks for the user input again until a valid response is collected from the user
- the function will return this value

### declare the player score variables

- create two variables, one to track the current score of the computer player, another to track the current score of the user player

### write the logic to play a single round

- create a function with two parameters, one parameter for the string value of the user choice (rock, paper, or scissors), another parameter for the string value of the computer choice
- determine the outcome of the comparison of the user and computer choices.
- based on the outcome of the comparison, update the variables that carry the score of the user and the computer by 1 if they win. If they lose or draw don't increment the score
- log the outcome of the comparison

### write the logic to play the entire game

- create a function that runs the function to play one round, five times over, and compares the final scores for the user and the computer to determine a winner of the overall game