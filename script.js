    document.addEventListener('DOMContentLoaded', (event) => {
        let answer = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        // Log the answer to the console for the developer to see
        console.log("The answer is: " + answer);

        let userGuessInput = document.getElementById('userGuess');
        let guessButton = document.getElementById('guessButton');
        let gameMessage = document.getElementById('gameMessage');

        guessButton.addEventListener('click', () => {
            let userGuess = parseInt(userGuessInput.value);
            attempts++;

            if (userGuess === answer) {
                gameMessage.textContent = "Wow! Congratulations, you got the number!";
            } else if (userGuess > answer) {
                gameMessage.textContent = "Your answer is too high. Try another number.";
            } else if (userGuess < answer) {
                gameMessage.textContent = "Your answer is too low. Try another number.";
            }

            if (attempts >= 5 && userGuess !== answer) {
                gameMessage.textContent = `Uhmm, you missed the number. The correct number was ${answer}. Try again with a new number.`;
                answer = Math.floor(Math.random() * 100) + 1;
                console.log("The new answer is: " + answer); // Log the new answer to the console
                attempts = 0;
            }

            userGuessInput.value = '';
            userGuessInput.focus();
        });
    });
