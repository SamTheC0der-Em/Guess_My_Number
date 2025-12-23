'use strict';
// DOM - DOCUMENT OBJECT MODEL
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 2);
document.querySelector('.number').textContent = secretNumber;

console.log(document.querySelector('.score').textContent);

document.querySelector('.message').textContent;
document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Input a Number';
  } else if (guess === secretNumber) {
    // GUESS IS COREECT
    document.querySelector('.message').textContent = 'Congratulations!';
  } else if (guess < secretNumber) {
    // GUESS IS WRONG
    document.querySelector('.message').textContent = 'Too low!';
    // score = score - 1
    // score -= 1
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    // GUESS IS WRONG
    document.querySelector('.message').textContent = 'Too high!';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
});