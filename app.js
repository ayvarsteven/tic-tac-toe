const ticTacToe = (() => {
  const gameboard = [];
  const player1 = {};
  const player2 = {};
  const game = {};

  const getDomElements = (() => {
    const mainContainer = document.getElementById('main-container');
    const turnDisplay = document.getElementById('turn-display');
    const boardContainer = document.getElementById('board-container');
    const restartBtn = document.getElementById('restart-btn');

    return { mainContainer, turnDisplay, boardContainer, restartBtn };
  })();

  return { getDomElements };
})();
