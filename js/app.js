let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Нужно ввести число от ${min} до ${max}`, "red")
    }

    // check if won
     if (guess === winningNum) {
         gameOver(true, `Поздравляю! Вы угадали число ${winningNum}`)
     } else {
         guessesLeft -= 1;
        
         // if lost 

         if (guessesLeft === 0) {
             gameOver(false, `Вы проиграли! Правильный ответ был ${winningNum}`)
         } else {
             
             guessInput.style.border = "1px solid red";

             guessInput.value = "";
             setMessage(`Неверно! У вас осталось ${guessesLeft} попыток`, "red")
         }
     }
})

game.addEventListener('mousedown', function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
})

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function gameOver(won, msg) {
    let color;

    if (won) {
        color = "green" 
    } else {
        color = "red" 
    }
    
    guessInput.disabled = true;
    guessInput.value = "";
    guessInput.style.border = `1px solid ${color}`;
    message.style.color = color;
    setMessage(msg);

    guessBtn.textContent = "Начать заново";
    guessBtn.className += "play-again"
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color; 
}

