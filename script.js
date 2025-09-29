function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  const init = () => {
    console.log('starting game');
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());  
      }
    }
  };
  init();
  

  function Cell() {
    let value = 0;
  
    const addToken = (player) => {
      value = `${player}`;
    };
  
    const getValue = () => value;
  
    return {
      addToken,
      getValue
    };
  }

  function getP1Name(form) {
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const p1Name = object.playerName;
    populateP1Name(p1Name);
    const blank = document.querySelector('.p1');
    blank.style.display = 'none';
  }

  function getP2Name(form) {
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const p2Name = object.playerName;
    populateP2Name(p2Name);
    const blank = document.querySelector('.p2');
    blank.style.display = 'none';
  }

  document.getElementById('playerOneName').addEventListener('submit', (e) => {
    e.preventDefault();
    getP1Name(e.target);
  })

  document.getElementById('playerTwoName').addEventListener('submit', (e) => {
    e.preventDefault();
    getP2Name(e.target);
  })
  
  
  const players = [
    {
      name: '',
      piece: 'X',
      choices: []
    }, {
      name: '',
      piece: 'O',
      choices: []
    }
  ];
  
  function populateP1Name(p1Name) {
    const player1 = players[0];
    player1.name = player1.name + p1Name;
    console.log(player1.name);
  }

  function populateP2Name(p2Name) {
    const player2 = players[1];
    player2.name = player2.name + p2Name;
    console.log(player2.name);
  }


  let player = players[0];
  const getActivePlayer = () => player;
  const turnText = `It is now ${getActivePlayer().name}'s turn`;

  function resetChoices() {
    players[0].choices.length = 0;
    players[1].choices.length= 0;
  }

  const switchPlayerTurn = (cellButton) => {
    win();
    player = player === players[0] ? players[1] : players[0];
    cellButton.removeListener
  };

  const removeListener = () => {
    document.querySelectorAll('button');
    button.remove
    console.log('This box has already been selected');
  }

  const winningCombos = [
     ['a0', 'a1', 'a2'],  ['b0', 'b1', 'b2'], ['c0', 'c1', 'c2'],  ['a0', 'b0', 'c0'],  ['a1', 'b1', 'c1'],  ['a2', 'b2', 'c2'],  ['a0', 'b1', 'c2'], ['a2', 'b1', 'c0']];
  

  function compare(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

  function reload() {
     window.location.reload();
  }

  function startGame() {
    if (players[0].name === '' && players[1].name === '') {
      players[0].name = players[0].name + 'Player One Name';
      players[1].name = players[1].name + 'Player Two Name';
    } else if (players[1].name === '') {
      players[1].name = players[1].name + 'Player Two Name';
    } else if (players[0].name === '' && players[1].name !== '') {
      players[0].name = players[0].name + 'Player One Name';
    }
    cellValues();
  }

  function playAgain() {
    console.log('starting new game');
    const cont = document.querySelector('.container');
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton');
    playAgainButton.textContent = 'Play Again!';
    cont.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', clearBoard);
  }

  document.querySelector('.start').addEventListener('click', (e) => {
    e.preventDefault();
    startGame();
  })

  function clearBoard() {
  const cell = document.querySelectorAll('button.cell');
  for (const i of cell) {
    i.classList.remove('flipped');
    i.textContent = '';
    i.addEventListener('click', handleClick);
  }
  resetChoices();
  console.log('cleared');
  const winDiv = document.querySelector('div.win');
  const button = document.querySelector('.playAgainButton');
  const cont = document.querySelector('.container');
  const board = document.querySelector('.board');
  cont.removeChild(button);
  cont.removeChild(winDiv);
  reload();
  };

  const win = () => {
    for (const combo of winningCombos) {
      if (combo.every(square => player.choices.includes(square))) {
        const winDiv = document.createElement('div');
        const cont = document.querySelector('.container');
        winDiv.classList.add('win');
        winDiv.textContent = `${player.name} wins!`;
        cont.appendChild(winDiv);
        const target = document.querySelectorAll('button');
        for (const button of target) {
          button.removeEventListener('click', handleClick);
        }
        playAgain();
      }
    }
    return false;
  };


  function handleClick(event) {
    const target = event.target;
    target.textContent = getActivePlayer().piece;
    target.classList.add('flipped');
    const choice = getActivePlayer().choices;
    const player = getActivePlayer().name;
    choice.push(target.dataset.column)
    console.log(`${player} picked ${choice}`);
    switchPlayerTurn(target);
    target.removeEventListener('click', handleClick);};
    
  
  const getBoard = () => board;
  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
  console.log(boardWithCellValues);
  

  const cellValues = () => {
    let cellValue = '';
    const letters = ['a', 'b', 'c'];
    letters.forEach(i => {
      boardWithCellValues.forEach((t, index) => {
        cellValue = i + index;
        const board = document.querySelector('.board');
        const cellButton = document.createElement('button');
        cellButton.classList.add('cell');
        cellButton.dataset.column = cellValue;
        //cellButton.textContent = cellValue;
        cellButton.addEventListener('click', handleClick);
        board.appendChild(cellButton);
      })  
    })
    return {cellValue, getActivePlayer, init}
  };
};




function GameController () {
  const game = GameBoard();
}

GameController()
