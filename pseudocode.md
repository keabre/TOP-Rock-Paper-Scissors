## GET COMPUTER CHOICE

within function -> 
    initialise computer choice variable
    set computer choice variable to empty string

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

within function -> 
    initialise user choice variable
    set user choice variable to empty string

    initialise user guess variable
    prompt user to enter a word
    set user guess variable to this word

    while user guess variable is not "rock", "paper", or "scissors" then
    display an error message about invalid word
    prompt user to enter a word again
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

within function that accepts two parameters
(the user choice function and the computer choice function) ->
    initialise outcome variable
    set outcome variable to an empty string

    if user choice from parameter is "rock" then
        if computer choice from parameter is "rock" then 
        set outcome variable to 'draw'

        else if computer choice from parameter is "paper" then
        increment computer score variable by 1 
        set outcome variable to 'lose'

        else then
        increment user score variable by 1
        set outcome variable to 'win'

    else if user choice from parameter is "paper" then 
        if computer choice from parameter is "rock" then 
        increment user score variable by 1
        set outcome variable to 'win'

        else if computer choice from parameter is "paper" then
        set outcome variable to 'draw'

        else then
        increment computer score variable by 1
        set outcome variable to 'lose'

    else
        if computer choice from parameter is "rock" then 
        increment computer score variable by 1
        set outcome variable to 'lose'

        else if computer choice from parameter is "paper" then
        increment user score variable by 1 
        set outcome variable to 'win'

        else then
        set outcome variable to 'draw'

    if outcome variable is "win" then
    log "You win!"
    else if outcome variable is "lose" then
    log "Computer wins!"
    else then
    log "It's a draw!

    log "Your score is" user score variable
    log "Computer score is" computer score variable

## PLAY ENTIRE GAME

within function -> 
    initialise counter variable
    set counter variable to 0

    while counter variable is less than 5 then
    (PLAY A SINGLE ROUND)
    increment counter variable by 1

    if user score variable is greater than computer score variable then
    display the text "You win! Congratulations!"

    else if computer score variable is greater than user score variable then
    display the text "You lose! Better luck next time!"

    else then
    display the text "It's a draw! No winners today!"

