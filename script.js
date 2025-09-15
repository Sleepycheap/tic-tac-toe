const scorePoint = () => {
  
}

const player = 'player1';
const chosen1 = [];
const chosen2 = [];



const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const number = Math.floor(Math.random() * (max - min) + min);
  const letter = number % 2 === 0 ? 'X' : 'O';
  const choice = `${number}: ${letter}`;
  return number, choice;
};

//const random = getRandom(0, 10);

const markSquare = (number, choice) => {
  if (player === 'player1') {
    console.log(chosen1);
    chosen1.push(number);
    console.log(`Player 1 chose ${choice}`);
  } else {
    chosen2.push(number);
    console.log(`Player 2 chose ${choice}`);
  }
}

const createDiv = function(random) {
  console.log(random);
  const divName = `div${random}`;
  console.log(divName);
};

//blocks = ['div1', 'div2', 'div3', ...]


const winningRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]];


const playGame = (number, choice) => {
  getRandom(1, 10);
  //evenOrOdd(number);
  markSquare(number, choice);
  checkWin(chosen1);
  if (checkWin(chosen1)) {
    console.log('Player 1 wins');
  } else if (checkWin(chosen2)) {
    console.log('Player 2 wins');
  } else {
    console.log('No one wins');
  }
};




