document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById('TriviaAnswer');
    triviaInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action to avoid form submission or other behaviors
            checkTriviaAnswer();
        }
    })
    
    const numberInput = document.getElementById('numberInput');
    numberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action to avoid form submission or other behaviors
            checkNumber();
        }
    })
    ;
    
    
})


// function to check Trivia Answer
function checkTriviaAnswer(){
    const answer = document.getElementById('TriviaAnswer').value.trim();
    const responseElement = document.getElementById('TriviaResponse');
    const correctAsnwer = "Paris";
    
    if (answer.toLowerCase() === correctAsnwer.toLowerCase()){
        responseElement.textContent = `Correct! You guessed ${answer}`;
    } else {
        responseElement.textContent = `Not Correct! Try again`;
    }
}


function checkNumber() {
    const numInput = document.getElementById('numberInput').value;
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
        const isEven = num % 2 === 0;
        document.getElementById('output').innerText = `The number ${num} is ${isEven ? 'even' : 'odd'}.`;
    } else {
        document.getElementById('output').innerText = 'Please enter a valid 5 digits number.'
    }
}