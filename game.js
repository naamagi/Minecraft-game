// function main(currentTime){
//     window.requestAnimationFrame(main)
//     console.log(currentTime)
// }
// window.requestAnimationFrame(main)

const tiles = {
  sky: 0,
  cloud: 1,
  dirt: 2,
  rock: 3,
  trunk: 4,
  leaves: 5,
  grass: 6,
  sun: 7,
};

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0],
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 4, 0, 0, 3],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const generateBoard = () => {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement("div");
    //   cell.addEventListener("click", pickTile);
      switch (matrix[i][j]) {
        case 0:
          cell.classList.add("sky");
          cell.setAttribute("filledTile", "false");

          break;
        case 1:
          cell.classList.add("cloud");
          cell.setAttribute("filledTile", "false");

          break;
        case 2:
          cell.classList.add("dirt");
          cell.setAttribute("filledTile", "true");

          break;
        case 3:
          cell.classList.add("rock");
          cell.setAttribute("filledTile", "true");

          break;
        case 4:
          cell.classList.add("trunk");
          cell.setAttribute("filledTile", "true");

          break;
        case 5:
          cell.classList.add("leaves");
          cell.setAttribute("filledTile", "true");

          break;
        case 6:
          cell.classList.add("grass");
          cell.setAttribute("filledTile", "true");

          break;
        case 7:
          cell.classList.add("sun");
          cell.setAttribute("filledTile", "false");

          break;
        default:
      }
      gameBoard.appendChild(cell);
      //draw div
      //div class="cell"
    }
  }
};

generateBoard();

const initiateTools = () => {
  const tools = document.querySelectorAll("#game-tools");
  for (const tool of tools) {
    tool.setAttribute("activeTool", "false");
    tool.addEventListener("click", changeFunctionalityToTools);
  }
  //   const tool = event.target;
};

initiateTools();

const changeFunctionalityToTools = (event) => {
  const pickedTool = event.target;
  const tools = document.querySelectorAll("#game-tools");
  for (const tool of tools) {
    if (tool.activeTool) {
      tool.setAttribute("activeTool", "false");
    }
  }
  pickedTool.setAttribute("activeTool", "true");
};


// const pickTile=(event) => {
//     const pickedTile = event.target;
// if(pickedTile.filledTile)

// }
