// ******** QUERY SELECTORS ******** //
var gameBoard = document.getElementById('gameBoard');
var gameOption = document.getElementById('gameChoice');
var classicGame = document.getElementById('chooseGame');
var additionGame = document.getElementById('chooseGameAddition');
var humanPlayer = document.getElementById('humanPlay');
var leftSideWeapon = document.getElementById('left');
var rightSideWeapon = document.getElementById('right');
var changeGameBtn = document.getElementById('changeGame')



// ******** GLOBAL VARIABLES ******** //
var game = new Game();


// ******** EVENTLISTENERS ******** //
gameBoard.addEventListener('click', gameChoices);
// humanPlayer.addEventListener('click', declareWinner);



// ******** EVENT HANDLERS AND FUNCTIONS ******** //

function hideShow(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

function gameChoices(event) {
  if (event.target.id === 'chooseGame') {
    gameOption.innerText = 'Choose Your weapons!'
    humanPlayer.innerHTML += `
        <img class='rock-weapon' id='rock' src='Assets/rock-cartoon.webp' alt='rock cartoon'/>
        <img class='paper-weapon' id='paper' src='Assets/paper-cartoon.webp' alt='paper cartoon'/>
        <img class='scissor-weapon' id='scissors' src='Assets/scissors-cartoon.png' alt='scissors cartoon'/>`
    hideShow(classicGame, false)
    hideShow(additionGame, false)
    game.gameType = 'Classic'
  } else if (event.target.id === 'chooseGameAddition') {
    gameOption.innerText = 'Choose Your weapons!'
    humanPlayer.innerHTML += `<img class='rock-weapon' id='rock' src='Assets/rock-cartoon.webp' alt='rock cartoon'/>
    <img class='paper-weapon' id='paper' src='Assets/paper-cartoon.webp' alt='paper cartoon'/>
    <img class='scissor-weapon' id='scissors' src='Assets/scissors-cartoon.png' alt='scissors cartoon'/>
    <img class='spock-weapon' id='spock' src='Assets/spock-character.png' alt='spock character'/>
    <img class='lizard-weapon' id='lizard' src='Assets/lizard-icon.webp' alt= 'lizard'>`
    hideShow(classicGame, false)
    hideShow(additionGame, false)
    game.gameType = 'Advanced'

  }
}