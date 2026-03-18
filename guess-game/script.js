// start game
function startGame() {
    const maxAttempts = 3;

    // generate a random number from 1-10
    let randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
    //console.log(randomNumber); 

    // for loop for 3 attempts only
    for (let i = 1; i <= maxAttempts; i++) {
        // ask user for guess
        let guess = prompt("Attempt " + i + "\nPlease enter your guess (1-10):");
        guess = Number(guess);
        //console.log(guess);

        // check if answer is correct 
        if (randomNumber != guess) {
            // if wrong try again until three attempts
            if (guess > randomNumber) {
                alert("Too high!");
            }
            else if (guess < randomNumber) {
                alert("Too low!");
            }
        }
        else {
            // if correct: user wins 
            alert("Correct, the number was " + randomNumber + "! You WIN!");
            return;
        }
    }
    alert("Game Over! \nThe number was " + randomNumber + "!");
}