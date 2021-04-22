// ******** QUERY SELECTORS ******** //
var gameBoard = document.getElementById('gameBoard');
var gameOption = document.getElementById('gameChoice');
var classicGame = document.getElementById('chooseGame');
var additionGame = document.getElementById('chooseGameAddition');
var humanPlayer = document.getElementById('humanPlay');
var leftSideWeapon = document.getElementById('left');
var rightSideWeapon = document.getElementById('right');



// ******** GLOBAL VARIABLES ******** //
var game = new Game();


// ******** EVENTLISTENERS ******** //
gameBoard.addEventListener('click', gameOption);
humanPlayer.addEventListener('click', declareWinner);



// ******** EVENT HANDLERS AND FUNCTIONS ******** //

function hideShow(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}