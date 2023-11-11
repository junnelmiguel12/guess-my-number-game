'use strict';

let checkBtnEl = document.querySelector('.check');
let againBtnEl = document.querySelector('.again');
let messageEl = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let secretNumberEl = document.querySelector('.number');
let guessNumberEl = document.querySelector('.guess');
let bodyEl = document.querySelector('body');

let displayMessage = function (message) {
    messageEl.textContent = message;
  };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtnEl.addEventListener('click', function () {
    const guessNumber = Number(guessNumberEl.value);

    if (!guessNumber) {
        displayMessage('⛔️ No number.');
    } else if (guessNumber === secretNumber) {
        displayMessage('🎉 Correct number!');
        secretNumberEl.textContent = secretNumber;
        
        if (score > highScore) {
            highScore = score;
            highScoreEl.textContent = highScore;
        }

        bodyEl.style.backgroundColor = '#60b347';
        secretNumberEl.style.width = '30rem';
    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreEl.textContent = score;
        } else {
            displayMessage('💥 Game Over!');
            scoreEl.textContent = 0;
        }
    }
});

againBtnEl.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    score = 20;
    scoreEl.textContent = 20;
    secretNumberEl.textContent = '?';
    guessNumberEl.value = '';

    bodyEl.style.backgroundColor = '#222';
    secretNumberEl.style.width = '15rem';
});
