// ******** QUERY SELECTORS ******** //
var gameBoard = document.getElementById('gameBoard');
var gameOption = document.getElementById('gameChoice');
var classicGame = document.getElementById('chooseGame');
var additionGame = document.getElementById('chooseGameAddition');
var humanPlayer = document.getElementById('humanPlay');
var humanRock = document.getElementById('rock');
var humanPaper = document.getElementById('paper');
var humanScissor = document.getElementById('scissors');
var humanSpock = document.getElementById('spock');
var humanLizard = document.getElementById('lizard')
var leftSideWeapon = document.getElementById('left');
var rightSideWeapon = document.getElementById('right');
var changeGameBtn = document.getElementById('changeGame');
var humanWinCount = document.getElementById('humanWins');
var coronaWinCount = document.getElementById('coronaWins');
var changeGameBtn = document.getElementById('changeGame')



// ******** GLOBAL VARIABLES ******** //
var game = new Game();

// ******** EVENTLISTENERS ******** //
gameBoard.addEventListener('click', gameChoices);
humanPlayer.addEventListener('click', declareWinner);
changeGameBtn.addEventListener('click', changeGameType);

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
  game.human.takeTurns()
  if (getWeapon === 'rock') {
    coronaWeapon()
    game.humanWeapon = 'rock'
    leftSideWeapon.innerHTML += `<img class='rock-weapon' id='rock' src='Assets/rock-cartoon.webp' alt='rock cartoon'/>`
  }
  if (getWeapon === 'paper') {
    coronaWeapon()
    game.humanWeapon = 'paper'
    leftSideWeapon.innerHTML += `<img class='paper-weapon' id='paper' src='Assets/paper-cartoon.webp' alt='paper cartoon'/>`
  }
  if (getWeapon === 'scissors') {
    coronaWeapon()
    game.humanWeapon = 'scissors'
    leftSideWeapon.innerHTML += `<img class='scissor-weapon' id='scissors' src='Assets/scissors-cartoon.png' alt='scissors cartoon'/>`
  }
  if (getWeapon === 'spock') {
    coronaWeapon()
    game.humanWeapon = 'spock'
    leftSideWeapon.innerHtml += `  <img class='spock-weapon' id='spock' src='Assets/spock-character.png' alt='spock character'/>`
  }
  if (getWeapon === 'lizard') {
    coronaWeapon()
    game.humanWeapon = 'lizard'
    leftSideWeapon.innerHTML += `<img class='lizard-weapon' id='lizard' src='Assets/lizard-icon.webp' alt='lizard'/>`
  }

}

function coronaWeapon() {
  game.randomGuess(game.weaponsClassic, game.weaponsAdvanced);
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
  if (game.coronaWeapon === 'spock') {

    rightSideWeapon.innerHtml += ` <img class='spock-weapon' id='spock' src='Assets/spock-character.png' alt='spock character'/>`
  }
  if (game.coronaWeapon === 'lizard') {
    rightSideWeapon.innerHTML += `<img class='lizard-weapon' id='lizard' src='Assets/lizard-icon.webp' alt='lizard'/>`
  }
}

function findWinner() {
  if (game.findGameWinner()) {
    humanWinCount.innerText = game.human.wins += 1
    game.human.saveWinsToStorage()
    gameOption.innerHTML = 'Human saved 💉'
  } else if (game.findIfGameIsDraw()) {
    gameOption.innerText = "It's a Draaaawww"
  } else {
    coronaWinCount.innerText = game.corona.wins += 1
    game.corona.saveWinsToStorage()
    gameOption.innerText = 'Corona Made One Human Sick 🦠'
  }

}

function declareWinner() {
  humanWeapon(event)
  findWinner()
  game.resetBoard(leftSideWeapon, rightSideWeapon, gameOption)
  hideShow(changeGameBtn, true)
}

function retriveFromStorage() {
  if (game.findGameWinner()) {
    humanWinCount.innerText = game.human.retrieveHumanWinsFromStorage()
    console.log(humanWinCount)
  } else {
    coronaWinCount.innerText = game.corona.retrieveCoronaWinsFromStorage()
    console.log(coronaWinCount)
  }
}

function changeGameType() {
  hideShow(classicGame, true);
  hideShow(additionGame, true);
  hideShow(changeGameBtn, false)
  humanPlayer.innerHTML = ''
  retriveFromStorage();
}