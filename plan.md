# PLANNING




## steps provided by The Odin Project as guidance


- Write the logic to get the computer choice:
    Your game will be played against the computer. You will write a function that randomly returns "rock", "paper", "scissors".

- Write the logic to get the human choice
    Your game will be played by a human player. You will write a function that takes the user choice and returns it.

- Declare the player score variables
    Your game will keep track of the players score. You will write variables to keep track of the players score.

- Write the logic to play a single round
    Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.

- Write the logic to play the entire game
    Your game will play 5 rounds. You will write a function that plays 5 rounds, keeping track of the scores and declares a winner at the end.




## MY UNDERSTANDING AND PLAIN ENGLISH REWORDING OF PROVIDED INSTRUCTIONS


### Write the logic to get the computer choice

- Create a function that generates a random choice by generating a random number between 1 and 3, which correspond to "rock", "paper", and "scissors" respectively and returns this value

### Write the logic to get the human choice

- Create a function that prompts the user to enter "rock", "paper", or "scissors"
- The user input will be validated to be exactly as specified from the program, or else it asks for the user input again until a valid response is collected from the user
- The function will return this value

### Declare the player score variables

- Create two variables, one to track the current score of the computer player, another to track the current score of the user player

### Write the logic to play a single round

- Create a function with two parameters, one parameter for the string value of the user choice (rock, paper, or scissors), another parameter for the string value of the computer choice
- Determine the outcome of the comparison of the user and computer choices.
- Based on the outcome of the comparison, update the variables that carry the score of the user and the computer by 1 if they win. If they lose or draw don't increment the score
- Log the outcome of the comparison

### Write the logic to play the entire game

- Create a function that runs the function to play one round, five times over, and compares the final scores for the user and the computer to determine a winner of the overall game




# PLAN

## Inputs and Outputs

- Inputs: 
    - User choice
    - Computer choice

- Outputs: 
    - Winner for individual rounds
    - Winner for entire game
    - Input validation messages for correct or incorrect input for rock, paper or scissors choice

## Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- The program will not have a user interface.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The 'computer choice' input comes for randomly generating data within the program
- The 'user choice' input comes from the user themselves through a prompt

## What's the desired output?

- The final desired output is displaying an overall winner for the 5 part game, with inner single round outputs displaying the winner for individual rounds

## Given your inputs, what are the steps necessary to return the desired output?

- Input for [user choice]:
    - The user choice is collected
    - User choice is compared with computer choice to determine a winner
    - The result of this is then logged to the user

- Input for [computer choice]:
    - The computer choice is randomly generated
    - Computer choice is compared with user choice to determine a winner
    - The result of this is then logged to the user