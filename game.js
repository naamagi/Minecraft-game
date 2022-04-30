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
      switch (matrix[i][j]) {
        case 0:
          cell.classList.add("sky");
          cell.setAttribute("pickableTile", "false");

          break;
        case 1:
          cell.classList.add("cloud");
          cell.setAttribute("pickableTile", "false");

          break;
        case 2:
          cell.classList.add("dirt");
          cell.setAttribute("pickableTile", "true");

          break;
        case 3:
          cell.classList.add("rock");
          cell.setAttribute("pickableTile", "true");

          break;
        case 4:
          cell.classList.add("trunk");
          cell.setAttribute("pickableTile", "true");

          break;
        case 5:
          cell.classList.add("leaves");
          cell.setAttribute("pickableTile", "true");

          break;
        case 6:
          cell.classList.add("grass");
          cell.setAttribute("pickableTile", "true");

          break;
        case 7:
          cell.classList.add("sun");
          cell.setAttribute("pickableTile", "false");

          break;
        default:
      }
      gameBoard.appendChild(cell);
    }
  }
};

generateBoard();

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
const initiateTools = () => {
  const tools = document.querySelectorAll("#game-tools");
  for (const tool of tools) {
    tool.setAttribute("activeTool", "false");
    tool.addEventListener("click", changeFunctionalityToTools);
  }
  //   const tool = event.target;
};

initiateTools();
const pickTile = (event) => {
  const pickedTile = event.target;
  const tools = document.querySelector("#game-tools");
  console.log(`${pickedTile.className}`);
  const className = pickedTile.className;
  const matchingTool = tools.querySelector(`.${className}`);

  console.log("matchingtool:" + matchingTool.className);
  const chosenTool = tools.querySelector('div[activeTool="true"]');
  console.log("chosenTool:" + chosenTool.className);

  const bank = tools.querySelector("#bank");
  console.log("bank:" + bank.id);
  console.log("pickedTile.pickableTile:" + pickedTile.getAttribute('pickableTile'));
  console.log("matchingTool.activeTool:" + matchingTool.getAttribute('activeTool'));
  console.log("pickedTile.className:" + pickedTile.className);
 
  if (pickedTile.getAttribute('pickableTile')) {
    if (matchingTool.getAttribute('activeTool')) {
      bank.classList.add(`${className}`);
        pickedTile.classList.add("sky");
      pickedTile.pickableTile = "false";
      console.log("pickedTile.pickableTile:" + pickedTile.pickableTile);

      //   bank.setAttribute("background", pickedTile.background);
      //   pickedTile.setAttribute("background, ")
    }
    //     else{
    // tool
    //     }
  }
};

const addingFunctionalitiesToTiles = () => {
  const gameBoard = document.getElementById("game-board");
  const cells = gameBoard.children;
  for (const cell of cells) {
    cell.addEventListener("click", pickTile);
  }
};

addingFunctionalitiesToTiles();
