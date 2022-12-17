const ticTacToe = (() => {
  const player1 = {};
  const player2 = {};
  const game = {};

  function CreatePlayer(name) {
    const obj = Object.create(this);
    obj.name = name;
    return obj;
  }

  const getDomElements = (() => {
    const mainContainer = document.getElementById('main-container');
    const turnDisplay = document.getElementById('turn-display');
    const boardContainer = document.getElementById('board-container');
    const cells = boardContainer.children;
    const restartBtn = document.getElementById('restart-btn');

    return { mainContainer, turnDisplay, boardContainer, restartBtn, cells };
  })();

  const BoardDisplay = (() => {
    const gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const numberOfturns = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    const cellArr = Array.from(getDomElements.cells);
    const playerTurn = getDomElements.turnDisplay;

    function popArray() {
      const value = numberOfturns.pop();
      return value;
    }

    const createSvgPlayerX = (value) => {
      const playerIcon = document.createElement('div');
      playerIcon.classList.add('icon-player-x');
      value.appendChild(playerIcon);
    };

    const createSvgPlayerO = (value) => {
      const playerIcon = document.createElement('div');
      playerIcon.classList.add('icon-player-o');
      value.appendChild(playerIcon);
    };

    const _turnDisplayController = (turn, cellValue, arrayPosition) => {
      if (turn === 1) {
        const playerOChoice = 1;
        gameboard[arrayPosition] = playerOChoice;
        createSvgPlayerO(cellValue);
        return (playerTurn.textContent = `Player X's Turn`);
      }
      if (turn === 2) {
        const playerXChoice = 2;
        gameboard[arrayPosition] = playerXChoice;
        createSvgPlayerX(cellValue);
        return (playerTurn.textContent = `Player O's Turn`);
      }
    };

    for (let i = 0; i < cellArr.length; i++) {
      cellArr[i].addEventListener('click', () => {
        const testValue = popArray();
        const divValue = i;
        gameboard[i] = divValue;
        _turnDisplayController(testValue, cellArr[i], gameboard[i]);
      });
    }
    return gameboard;
  })();

  return { BoardDisplay };
})();
