'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!';
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = secretNumber;
  //let score = Number(document.querySelector('.score').textContent);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Very high';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Very low';
      score--;
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'YOU LOST';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
