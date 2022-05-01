const functions = {};

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
functions.generateBoard = () => {
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

functions.generateBoard();

functions.changeFunctionalityToTools = (event) => {
  const pickedTool = event.target;
  const tools = document.querySelectorAll(".tool");
  for (const tool of tools) {
    if (tool.getAttribute("activeTool")) {
      tool.setAttribute("activeTool", "false");
    }
  }
  pickedTool.setAttribute("activeTool", "true");
};

functions.changeFunctionalityOfBanks = (event) => {
  const pickedBank = event.target;
//   const emptyBank = true;
  const banks = document.querySelectorAll(".bank");
  for (const bank of banks) {
    if (bank.getAttribute("activeBank")) {
      bank.setAttribute("activeBank", "false");
    }
    if (
      bank.getAttribute("className") == "leaves" ||
      bank.getAttribute("className") == "trunk" ||
      bank.getAttribute("className") == "grass" ||
      bank.getAttribute("className") == "dirt" ||
      bank.getAttribute("className") == "rock"
    ) {
    //   emptyBank = false;
    pickedBank.setAttribute("activeBank", "true");
    }
  }
//   if (!emptyBank) {
   
    // emptyBank = false;
    }
  
;

functions.initiateTools = () => {
  const tools = document.querySelectorAll(".tool");
  for (const tool of tools) {
    tool.setAttribute("activeTool", "false");
    tool.addEventListener("click", functions.changeFunctionalityToTools);
  }
};

functions.initiateTools();

functions.initiateBanks = () => {
  const banks = document.querySelectorAll(".bank");
  for (const bank of banks) {
    bank.setAttribute("activeBank", "false");
    bank.addEventListener("click", functions.changeFunctionalityOfBanks);
  }
};

functions.initiateBanks();

functions.pickTile = (event) => {
  const pickedTile = event.target;
  const tools = document.querySelector("#game-tools");
  console.log(`${pickedTile.className}`);
  const classNameCopy = pickedTile.className;
  const matchingTool = tools.querySelector(`.${classNameCopy}`);
  //   const chosenTool = tools.querySelector('div[activeTool="true"]');
  //   console.log("chosenTool:" + chosenTool.className);
  const bank = tools.querySelector(`#bank-${classNameCopy}`);
  if (pickedTile.getAttribute("pickableTile") == "true") {
    if (matchingTool && matchingTool.getAttribute("activeTool") == "true") {
      bank.classList.add(`${classNameCopy}`);
      bank.setAttribute("activeBank", "true");
      pickedTile.classList.add("sky-blue");
      pickedTile.setAttribute("pickableTile", "false");
    }
  }
};

functions.placeTile = (event) => {
  const placeToPut = event.target;
  console.log(placeToPut);

  const banks = document.querySelectorAll(".bank");
  console.log("1" + banks);
  const chosenBank = document.querySelector('[activeBank="true"]');
  console.log("2" + chosenBank);
  console.log("3" + placeToPut.getAttribute("pickableTile"));
  if (chosenBank && placeToPut.getAttribute("pickableTile") == "false") {
    const tools = document.querySelectorAll(".tool");
    for (const tool of tools) {
      if (tool.getAttribute("activeTool")) {
        tool.setAttribute("activeTool", "false");
      }
    }
    const bankIdCopy = chosenBank.getAttribute("id");
    console.log("4" + bankIdCopy);
    // console.log(`${pickedTile.className}`);
    const bankMaterial = bankIdCopy.slice(5);
    console.log("5" + bankMaterial);
    placeToPut.classList.remove("sky-blue");
    placeToPut.classList.remove("sky");

    placeToPut.classList.add(`${bankMaterial}`);
    console.log("6" + placeToPut.classList);
    placeToPut.setAttribute("pickableTile", "true");
    chosenBank.setAttribute("activeBank", "false");

    // const chosenTool = tools.querySelector('div[activeTool="true"]');
    // console.log("chosenTool:" + chosenTool.className);
    // const bank = tools.querySelector(`#bank-${classNameCopy}`);
    // if (pickedTile.getAttribute("pickableTile") == "true") {
    //   if (matchingTool && matchingTool.getAttribute("activeTool") == "true") {
    //     bank.classList.add(`${classNameCopy}`);
    //     console.log("bank:" + bank);
    //     pickedTile.classList.add("sky");
    //     pickedTile.setAttribute("pickableTile", "false");
    //   }
    // }
  }
};

functions.addingFunctionalitiesToTiles = () => {
  const gameBoard = document.getElementById("game-board");
  const cells = gameBoard.children;
  for (const cell of cells) {
    cell.addEventListener("click", functions.pickTile);
    cell.addEventListener("click", functions.placeTile);
  }
};
functions.addingFunctionalitiesToTiles();
