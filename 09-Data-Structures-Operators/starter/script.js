'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    [weekdays[4]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex, categorieIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[categorieIndex],
    ];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
};

const rest = new Map();
rest
  .set('name', 'Classico Italiano')
  .set('name1', 'Classico Italiano')
  .set(true, 'name');

const cap = function (name) {
  const names = name.split(' ');
  const up = [];
  for (const n of names) {
    up.push(n[0].toUpperCase() + n.slice(1));
  }
  //console.log(up.join(' '));
};

cap('All door to door');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const out = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${out.padEnd(20)}✅`);
  }
});

//console.log(rest);
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// let [main, secondary, third] = restaurant.categories;
// console.log(main, secondary, third);
// [main, secondary, third] = [secondary, third, main];
// console.log(main, secondary, third);
// const [a, b, c] = restaurant.order(2, 3, 1);
// console.log(a, b, c);

// const { name, openingHours, categories } = restaurant;
// console.log(openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // const {
// //   menu1: [],
// //   starterMenu: starters = [],
// // } = restaurant;
// // console.log(menu1, starters);

// const {
//   openingHours: {
//     sat: { open, close },
//   },
// } = restaurant;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   mainIndex: 2,
//   starterIndex: 2,
//   address: 'india',
// });

// const arr = [7, 8, 9];

// const arr1 = [1, 2, ...arr];
// console.log(arr1);

// console.log(undefined || null);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    // console.log(`${players[i]}`);
  }
  // console.log(`Total Score ${players.length}`);
};

const [...players1] = game.players[0];
const [...players2] = game.players[1];
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
const [...allPlayers] = [...players1, ...players2];
// console.log(gk, fieldPlayers, allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
//printGoals(game.scored);

// team1 < team2 && console.log(`Team1 wins`);
// team2 < team1 && console.log(`Team2 wins`);

for (const [i, x] of game.scored.entries()) {
  // console.log(`Goal ${i} : ${x}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.keys())];
// console.log(events);

for (const [key, value] of gameEvents) {
  // console.log(
  //   key <= 45
  //     ? `[First HALF] ${key} : ${value}`
  //     : `[SECOND HALF] ${key} : ${value}`
  // );
}
