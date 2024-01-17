'use strict';
const bookings = [];
const createBooking = function (num, passangers = 1, price = 199) {
  const booking = {
    num,
    passangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

//createBooking('VH123');
//console.log(bookings);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const ans = Number(prompt(`${this.question}\n ${this.options}`));

    if (ans >= 0 && ans <= 3) {
      this.answers[ans]++;
    } else {
      console.log(`Not valid Option`);
    }
    displayResults(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayResults = function (...type) {
  //console.log(`Poll results are ${type}`);
};

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
