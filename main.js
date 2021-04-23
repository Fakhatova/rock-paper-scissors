// ******** QUERY SELECTORS ******** //
var gameBoard = document.getElementById('gameBoard');
var gameOption = document.getElementById('gameChoice');
var classicGame = document.getElementById('chooseGame');
var additionGame = document.getElementById('chooseGameAddition');
var humanPlayer = document.getElementById('humanPlay');
var leftSideWeapon = document.getElementById('left');
var rightSideWeapon = document.getElementById('right');
var changeGameBtn = document.getElementById('changeGame');
var humanWins = document.getElementById('humanWins');
var coronaWins = document.getElementById('coronaWins');


// ******** GLOBAL VARIABLES ******** //
var game = new Game();
var winners = [];

// ******** EVENTLISTENERS ******** //
gameBoard.addEventListener('click', gameChoices);
humanPlayer.addEventListener('click', declareWinner);



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

function humanWeapon(event) {
  var getWeapon = event.target.id
  // game.humanTurn = 'first'
  game.human.takeTurns()
  if (getWeapon === 'rock') {
    game.humanWeapon = 'rock'
    leftSideWeapon.innerHTML += `<img class='rock-weapon' id='rock' src='Assets/rock-cartoon.webp' alt='rock cartoon'/>`
  }
  if (getWeapon === 'paper') {
    game.humanWeapon = 'paper'
    leftSideWeapon.innerHTML += `<img class='paper-weapon' id='paper' src='Assets/paper-cartoon.webp' alt='paper cartoon'/>`
  }
  if (getWeapon === 'scissors') {
    game.humanWeapon = 'scissors'
    leftSideWeapon.innerHTML += `<img class='scissor-weapon' id='scissors' src='Assets/scissors-cartoon.png' alt='scissors cartoon'/>`
  }
  // if (getWeapon === 'spock') {
  //   game.humanWeapon = 'spock'
  //   // gameBoard.innerHtml += `  <img class='spock-weapon' id='spock' src='Assets/spock-character.png' alt='spock character'/>`
  // }
  // if (getWeapon === 'lizard') {
  //   game.humanWeapon = 'lizard'
  //   // gameBoard.innerHTML += `<img class='lizard-weapon' id='lizard' src='Assets/lizard-icon.webp' alt='lizard'/>`
  // }

}

function coronaWeapon() {
  game.randomGuess(game.weaponsClassic);
  game.corona.takeTurns()
  if (game.coronaWeapon === 'rock') {
    rightSideWeapon.innerHTML += `<img class='rock-weapon' id='rock' src='Assets/rock-cartoon.webp' alt='rock cartoon'/>`
  }
  if (game.coronaWeapon === 'paper') {
    rightSideWeapon.innerHTML += `<img class='paper-weapon' id='paper' src='Assets/paper-cartoon.webp' alt='paper cartoon'/>`
  }
  if (game.coronaWeapon === 'scissors') {
    rightSideWeapon.innerHTML += `<img class='scissor-weapon' id='scissors' src='Assets/scissors-cartoon.png' alt='scissors cartoon'/>`
  }
  // if (game.coronaWeapon === 'spock') {
  //
  //   // gameBoard.innerHtml += ` <img class='spock-weapon' id='spock' src='Assets/spock-character.png' alt='spock character'/>`
  // }
  // if(game.coronaWeapon === 'lizard') {
  // gameBoard.innerHTML += `<img class='lizard-weapon' id='lizard' src='Assets/lizard-icon.webp' alt='lizard'/>`
  // }
}

function declareWinner() {
  humanWeapon(event)
  coronaWeapon();
  if (game.findGameWinner()) {
    var hWins = game.human.wins += 1
    console.log('updated wins', hWins)
    humanWins.innerText = hWins
    console.log('human element', humanWins)
    gameOption.innerText = 'Human saved 💉'
    console.log('game class ', game)
  } else if (game.findIfGameIsDraw()) {
    gameOption.innerText = "It's a Draaaawww"
  } else {
    var cWins = game.corona.wins += 1
    console.log('updated corona wins', cWins)
    coronaWins.innerText = cWins
    console.log('corona element', coronaWins)
    gameOption.innerText = 'Corona Made One Human Sick 🦠'
    console.log('game class ', game)

  }
}