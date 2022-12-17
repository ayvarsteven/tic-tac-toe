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
    const cellArr = Array.from(getDomElements.cells);
    for (let i = 0; i < cellArr.length; i++) {
      cellArr[i].addEventListener('click', () => {
        const divValue = i;
        const playerValue = 1;
        const computerValue = 2;
        gameboard[i] = divValue;
        console.log(gameboard);
        playerSelection(divValue);
        // return (gameboard[i] = divValue);
      });
    }
    // display value function
    return gameboard;
  })();

  const turnDisplayController = (() => {
    // if player turn === true, getDomElements.turnDisplay.textContent = 'Player X's Turn'
  })();

  return { CreatePlayer, BoardDisplay };
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
