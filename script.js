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
    }, {
      name: 'playerTwoName',
      piece: 'O'
    }
  ];

  let player = players[0];
  const getActivePlayer = () => player;
  const turnText = `It is now ${getActivePlayer().name}'s turn`;

  // const turnText = () => {
  //   getActivePlayer();
  //   console.log(player);
  //   const name = player.name;
  //   console.log(name);
 
  //   //turnDiv.textContent = `It is now ${getActivePlayer().name}'s turn`;
  //   turnDiv.classList.add('turn');
  //   turnCont.append(turnDiv);
  // };
  

  const switchPlayerTurn = () => {
    player = player === players[0] ? players[1] : players[0];
  };


    
  const className = player === players[0] ? '.one' : '.two';

  const getClassName = () => className;
  
  const getBoard = () => board;
  const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))

  const cellValues = () => {
    let value = '';
    const letters = ['a', 'b', 'c'];
    letters.forEach(i => {
      boardWithCellValues.forEach((t, index) => {
        value = i + index;
        const board = document.querySelector('.board');
        const cellButton = document.createElement('button');
        cellButton.classList.add('cell');
        cellButton.dataset.column = value;
        cellButton.textContent = value;
        cellButton.addEventListener('click', (e) => {
          const selectedColumns = e.target.dataset.column;
          //const player = getActivePlayer();
          cellButton.textContent = getActivePlayer().piece;
          cellButton.classList.add(getClassName())
          switchPlayerTurn(); 
        })
        board.appendChild(cellButton);
      })  
    })
    return {value, getActivePlayer}
  };
  //switchPlayerTurn();
  cellValues();
  

  // const buttons = document.querySelectorAll('button');
  // buttons.addEventListener('click', )
  

}
//const game = GameBoard();

function GameController () {
  const game = GameBoard();
  //const activeplayer = game.getActivePlayer();
}

GameController();