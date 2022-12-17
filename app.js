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
      playerIcon.classList.add('icon-test');
      value.appendChild(playerIcon);
      // call turn display controller for next player turn
    };

    const _turnDisplayController = (turn) => {
      if (turn === 1) {
        return (playerTurn.textContent = `Player X's Turn`);
      }
      if (turn === 2) {
        return (playerTurn.textContent = `Player O's Turn`);
      }
    };

    for (let i = 0; i < cellArr.length; i++) {
      cellArr[i].addEventListener('click', () => {
        const testValue = popArray();
        console.log(testValue);
        _turnDisplayController(testValue);
        const divValue = i;
        gameboard[i] = divValue;
        createSvgPlayerX(cellArr[i]);
      });
    }
    return gameboard;
  })();

  const turnDisplayController = (() => {
    // if player turn === true, getDomElements.turnDisplay.textContent = 'Player X's Turn'
  })();

  return { CreatePlayer, BoardDisplay, getDomElements };
})();

// ==============================================================================
// General Logic
// ==============================================================================
//
// user click (create corresponding array value for each div)
// user click middle (arra[4] === 0 or 1)
// calls function to update the value of the array

// turn display controller is called and updates the value to player X turn or player O turn
// create logic for turn display controller

// ==============================================================================
// Program Structure
// ==============================================================================
// 02 Create Player
// factory  function
// 03.A Board Display
// 03.B Display Controller
// 04. Board Controller
// 05 Build Logic for Game
// 06 Build Interface

// ==============================================================================
// Practice Concepts
// ==============================================================================
//  - Data Encapsulation
//  - Abstraction
//  - Modularity
//
// first write out the logic in comments then write modular functions to create the links between them then individually write out the logic for each block. Test that the block works first then once it returns what you expect, git commit.
