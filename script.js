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
  
  

  function createPlayers() {
    [
      {
        name: prompt('Player One Name'),
        piece: 'X',
        choices: []
      }, {
        name: prompt('Player Two Name'),
        piece: 'O',
        choices: []
      }
    ];

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

  function playAgain() {
    console.log('starting new game');
    const cont = document.querySelector('.container');
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton');
    playAgainButton.textContent = 'Play Again!';
    cont.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', clearBoard);
  }

  // function resetButton() {
  // const button = document.querySelector('button.reset');
  // button.addEventListener('click', clearBoard);
  // }

  //resetButton();  

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
  cont.removeChild(button);
  cont.removeChild(winDiv);
  players();
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
  cellValues();
};




function GameController () {
  const game = GameBoard();
  players();
}

GameController()
