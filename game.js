class Game {
  constructor() {
    this.playerHuman = new Player()
    this.playerCorona = new Player()
    this.gameType = null;
    this.weaponsClassic = ['rock', 'paper', 'scissors'];
    this.weaponsAdvanced = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    this.isGameOn = true;
    this.humanWeapon = null;
    this.coronaWeapon = null;

  }
  randomGuess(weaponsClassic) {
    console.log('hello')
    var index = Math.floor(Math.random() * weaponsClassic.length)
    var indexAdvanced = Math.floor(Math.random() * weaponsAdvanced.length)

    this.coronaWeapon = weaponsClassic[index]
    return this.coronaWeapon
  }
  findIfGameIsDraw() {
    if (this.humanWeapon === this.coronaWeapon) {
      return true
    }
  }

  findGameWinner() {
    if ((this.humanWeapon === 'rock' && this.coronaWeapon === 'scissors') ||
      (this.humanWeapon === 'paper' && this.coronaWeapon === 'rock') ||
      (this.humanWeapon === 'scissors' && this.coronaWeapon === 'paper')) {
      return true;
    } else {
      return false;
    }
  }
}

function humanWeapon(event) {
  var getWeapon = event.target.id
  if (getWeapon === 'rock') {
    game.humanWeapon = 'rock'
    leftSideWeapon.innerHTML += `<img class='rock-weapon' id='rock' src='https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-011-512.png'/>`
  }
  if (getWeapon === 'paper') {
    game.humanWeapon = 'paper'
    leftSideWeapon.innerHTML += `<img class='paper-weapon' id='paper' src='https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-512.png'/>`
  }
  if (getWeapon === 'scissors') {
    game.humanWeapon = 'scissors'
    leftSideWeapon.innerHTML += `<img class='scissor-weapon' id='scissors' src='https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png'/>`
  }
  // if (getWeapon === 'spock') {
  //   game.humanWeapon = 'spock'
  //   // gameBoard.innerHtml += `  <img class='spock-weapon' id='spock' src='https://w7.pngwing.com/pngs/365/477/png-transparent-spock-character-snoopy-homo-sapiens-t-shirt-mischief-boy-cartoon-fictional-character.png'/>`
  // }
  // if (getWeapon === 'lizard') {
  //   game.humanWeapon = 'lizard'
  //   // gameBoard.innerHTML += `<img class='lizard-weapon' id='lizard' src='🦎'/>`
  // }

}