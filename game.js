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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 0, 0],
  [0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 4, 0, 0, 3],
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
      cell.setAttribute("activeTile","false");
      switch (matrix[i][j]) {
        case 0:
          cell.classList.add("sky");
          break;
        case 1:
          cell.classList.add("cloud");
          break;
        case 2:
          cell.classList.add("dirt");
          break;
        case 3:
          cell.classList.add("rock");
          break;
        case 4:
          cell.classList.add("trunk");
          break;
        case 5:
          cell.classList.add("leaves");
          break;
        case 6:
          cell.classList.add("grass");
          break;
        case 7:
          cell.classList.add("sun");
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

const addFunctionalityToTools = () => {
  const axe = document.getElementById("axe");
  const pickaxe = document.getElementById("pickaxe");
  const shovel = document.getElementById("shovel");
axe.addEventListener("click",(event) => {

})


};
