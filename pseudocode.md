## GET COMPUTER CHOICE

initialise computer choice variable (globally)
set computer choice variable to empty string

within function -> 
    initialise random number variable
    generate random number between 1 and 3
    set random number variable to generated random number

    if random number is 1 then
    set computer choice variable to "rock"

    else if random number is 2 then
    set computer choice variable to "paper"

    else then
    set computer choice variable to "scissors"

## GET USER CHOICE

initialise user choice variable
set user choice variable to empty string

initialise user guess variable
prompt user to enter a word
set user guess variable to this word

while user guess variable is not "rock", "paper", or "scissors" then
prompt user to enter a word
set user guess variable to this word

if user guess variable is "rock" then
set user choice variable to "rock"

else if user guess variable is "paper" then
set user choice variable to "paper"

else then
set user choice variable to "scissors"


## PLAYER SCORE VARIABLES

intialise user score variable
set user score to 0

initialise computer score variable 
set computer score to 0

## PLAY A SINGLE ROUND 

initialise outcome variable
set outcome variable to an empty string

if user choice variable is "rock" then
    if computer choice variable is "rock" then 
    set outcome variable to 'draw'

    else if computer choice variable is "paper" then
    increment computer score variable by 1 
    set outcome variable to 'lose'

    else then
    increment user score variable by 1
    set outcome variable to 'win'

else if user choice variable is "paper" then 
    if computer choice variable is "rock" then 
    increment user score variable by 1
    set outcome variable to 'win'

    else if computer choice variable is "paper" then
    set outcome variable to 'draw'

    else then
    increment computer score variable by 1
    set outcome variable to 'lose'

else
    if computer choice variable is "rock" then 
    increment computer score variable by 1
    set outcome variable to 'lose'

    else if computer choice variable is "paper" then
    increment user score variable by 1 
    set outcome variable to 'win'

    else then
    set outcome variable to 'draw'

## PLAY ENTIRE GAME

initialise counter variable
set counter variable to 0

while counter variable is less than or equal to 5 then
do:(PLAY A SINGLE ROUND)
increment counter variable by 1

if user score variable is greater than computer score variable then
display the text "You win! Congratulations!"

else then
display the text "you lose! Better luck next time!"

