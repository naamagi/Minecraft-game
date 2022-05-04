
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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0],
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 5, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 5, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 4, 0, 0, 3],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const changeFunctionalityToTools = (event) => {
  const pickedTool = event.target;
  const allTools = document.querySelectorAll(".tool");
  allTools.forEach((tool) => {
    tool.setAttribute("activeTool", "false");
  });
  pickedTool.setAttribute("activeTool", "true");
  const activeBank = document.querySelector('[activeBank="true"]');
  if (activeBank) {
    activeBank.setAttribute("activeBank", "false");
  }
  const activeTile = document.querySelector('[activeTile="true"]');
  if (activeTile) {
    activeTile.setAttribute("activeTile", "false");
  }
};

const changeFunctionalityOfBanks = (event) => {
  const pickedBank = event.target;

  const activeTool = document.querySelector('[activeTool="true"]');
  if (activeTool) {
    activeTool.setAttribute("activeTool", "false");
  }

  if (pickedBank.getAttribute("fullBank") == "true") {

    pickedBank.setAttribute("activeBank", "true");
    const activeTile = document.querySelector('[activeTile="true"]');
    if (activeTile) {
      activeTile.setAttribute("activeTile", "false");
    }
  }
};

const changeTile = (event) => {
  const activeBank = document.querySelector('[activeBank="true"]');
  if (activeBank) {
    placeTile(event);
  } else {
    pickTile(event);
  }
};

const addingFunctionalitiesToTiles = () => {
  const gameBoard = document.getElementById("game-board");
  const cells = gameBoard.children;
  for (const cell of cells) {
    cell.addEventListener("click", changeTile);
  }
};

const initiateBanks = () => {
  const banks = document.querySelectorAll(".bank");
  for (const bank of banks) {
    bank.setAttribute("activeBank", "false");
    bank.setAttribute("fullBank", "false");
    bank.addEventListener("click", changeFunctionalityOfBanks);
  }
  addingFunctionalitiesToTiles();
};

const initiateTools = function () {
  const tools = document.querySelectorAll(".tool");
  for (const tool of tools) {
    tool.setAttribute("activeTool", "false");
    tool.addEventListener("click", changeFunctionalityToTools);
  }
  initiateBanks();
};

const generateBoard = () => {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement("div");
      switch (matrix[i][j]) {
        case 0:
          cell.classList.add("sky");
          cell.setAttribute("id", "sky");

          cell.setAttribute("pickableTile", "false");
          cell.setAttribute("activeTile", "false");
          break;
        case 1:
          cell.classList.add("cloud");
          cell.setAttribute("id", "cloud");

          cell.setAttribute("pickableTile", "false");
          cell.setAttribute("activeTile", "false");

          break;
        case 2:
          cell.classList.add("dirt");
          cell.setAttribute("id", "dirt");

          cell.setAttribute("pickableTile", "true");
          cell.setAttribute("activeTile", "false");

          break;
        case 3:
          cell.classList.add("rock");
          cell.setAttribute("id", "rock");

          cell.setAttribute("pickableTile", "true");
          cell.setAttribute("activeTile", "false");

          break;
        case 4:
          cell.classList.add("trunk");
          cell.setAttribute("id", "trunk");

          cell.setAttribute("pickableTile", "true");
          cell.setAttribute("activeTile", "false");

          break;
        case 5:
          cell.classList.add("leaves");
          cell.setAttribute("id", "leaves");

          cell.setAttribute("pickableTile", "true");
          cell.setAttribute("activeTile", "false");

          break;
        case 6:
          cell.classList.add("grass");
          cell.setAttribute("id", "grass");

          cell.setAttribute("pickableTile", "true");
          cell.setAttribute("activeTile", "false");

          break;
        case 7:
          cell.classList.add("sun");
          cell.setAttribute("id", "sun");

          cell.setAttribute("pickableTile", "false");
          cell.setAttribute("activeTile", "false");

          break;
        default:
      }
      gameBoard.appendChild(cell);
    }
  }
  initiateTools();
};

generateBoard();

const pickTile = (event) => {
  const pickedTile = event.target;
  const tools = document.querySelector("#game-tools");
  const classNameCopy = pickedTile.className;
  const matchingTool = tools.querySelector(`.${classNameCopy}`);
  const chosenTool = tools.querySelector('[activeTool="true"]');
  const bank = tools.querySelector(`#bank-${classNameCopy}`);
  if (pickedTile.getAttribute("pickableTile") == "false") {
    return;
  } else if (matchingTool && matchingTool === chosenTool) {
    pickedTile.setAttribute("activeTile", "true");
    pickedTile.setAttribute("pickableTile", "false");
    pickedTile.classList.add("sky-blue");

    if (bank.getAttribute("fullBank") == "false") {
      bank.classList.add(`${classNameCopy}`);
      bank.setAttribute("fullBank", "true");
    }
    let text = +bank.innerText;
    text++;
    bank.innerText = text;
  }
};
const placeTile = (event) => {
  const chosenBank = document.querySelector('[activeBank="true"]');
  console.log("chosenBank:" + chosenBank);
  if (chosenBank.getAttribute("fullBank") == "false") {
    return;
  }
  const placeToPut = event.target;
  console.log("placeToPut"+placeToPut);



  if (placeToPut.getAttribute("pickableTile") == "false") {
    console.log("row 206!!");
    placeToPut.setAttribute("activeTile", "true");
    const bankIdCopy = chosenBank.getAttribute("id");
    console.log("bankIdCopy:"+ bankIdCopy);
    const bankMaterial = bankIdCopy.slice(5);
    console.log("bankMaterial:" +bankMaterial);

    let numberOfTiles = +chosenBank.innerText;
    chosenBank.innerText = --numberOfTiles;
    console.log("numberOfTiles:" + chosenBank.innerText);
    if (+chosenBank.innerText === 0) {
      chosenBank.setAttribute("fullBank", "false");
      console.log("bank ckass name:" + chosenBank.className);
      chosenBank.classList.remove(`${bankMaterial}`);
      console.log("chosenBank:" + chosenBank);
      console.log("placeToPut:" + placeToPut);
    }
    placeToPut.classList.remove("sky-blue");
    placeToPut.classList.remove("sky");
    placeToPut.classList.remove("cloud");
    placeToPut.classList.remove("sun");
    placeToPut.classList.get
    if(placeToPut.classList.length > 0) {
    placeToPut.classList.remove(placeToPut.className);
    }
    console.log("placeToPut"+placeToPut.className);

    placeToPut.classList.add(`${bankMaterial}`);
    console.log("placeToPut"+placeToPut.className);

    placeToPut.setAttribute("pickableTile", "true");
    chosenBank.setAttribute("activeBank", "false");
    placeToPut.setAttribute("activeTile", "false");
  }
};
