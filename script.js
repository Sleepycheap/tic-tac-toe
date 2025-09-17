function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
      
    }
  }
  
  console.log(board);

  function Cell() {
    let value = 0;
  
    const addToken = (player) => {
      value = `${player}`;
    };
  
    const getValue = () => value;
    console.log(getValue());
  
    return {
      addToken,
      getValue
    };
  }
  
  const players = [
    {
      name: 'playerOneName',
      piece: 'X',
      choices: []
    }, {
      name: 'playerTwoName',
      piece: 'O',
      choices: []
    }
  ];

  let player = players[0];
  const getActivePlayer = () => player;
  const turnText = `It is now ${getActivePlayer().name}'s turn`;

  const switchPlayerTurn = (cellButton) => {
    player = player === players[0] ? players[1] : players[0];
    cellButton.removeListener
  };

  const removeListener = () => {
    document.querySelectorAll('button');
    button.remove
    console.log('This box has already been selected');
  }

  const winningCombos = () => {
    {combo1: ['a0', 'a1', 'a2']}; {combo2: ['b0', 'b1', 'b2']}, combo3: ['c0', 'c1', 'c2'], combo4: ['a0', 'b0', 'c0'], combo5: ['a1', 'b1', 'c1'], combo6: ['a2', 'b2', 'c2'], combo7: ['a0', 'b1', 'c2'], combo8: ['a2', 'b1', 'c0']};
  }

  function winCondtion(winningCombos) {
    if (player.choices === combo1 || player.choices === combo2 || player.choices === combo3 || player.choices === combo4 || player.choices === combo5 || player.choices === combo6 || player.choices === combo7 || player.choices === combo8) {
      alert(`${player} wins!`);
      console.log(`${player} wins!`);
    }
  }
  function handleClick(event) {
    const target = event.target;
    target.textContent = getActivePlayer().piece;
    target.classList.add('flipped');
    const choice = getActivePlayer().choices;
    choice.push(target.dataset.column)
    winCondtion()
    //console.log(`Choice: ${choice}`);
    switchPlayerTurn(target);
    target.removeEventListener('click', handleClick);};
    
  // const className = player === players[0] ? '.one' : '.two';

  // const getClassName = () => className;
  
  const getBoard = () => board;
  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
  console.log(boardWithCellValues[1]);


 

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
        cellButton.textContent = cellValue;
        cellButton.addEventListener('click', handleClick);
        board.appendChild(cellButton);
      })  
    })
    return {cellValue, getActivePlayer}
  };
  //switchPlayerTurn();
  cellValues();
  

  // const buttons = document.querySelectorAll('button');
  // buttons.addEventListener('click', )
  

};
//const game = GameBoard();

function GameController () {
  const game = GameBoard();
  //const activeplayer = game.getActivePlayer();
}

GameController();
