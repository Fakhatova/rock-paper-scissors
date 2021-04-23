class Game {
  constructor() {
    this.playerHuman = new Player()
    this.playerCorona = new Player()
    this.gameType = null;
    this.weaponsClassic = ['rock', 'paper', 'scissors'];
    // this.weaponsAdvanced = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    this.isGameOn = true;
    this.humanWeapon = null;
    this.coronaWeapon = null;

  }
  randomGuess(weaponsClassic) {
    console.log('hello')
    var index = Math.floor(Math.random() * weaponsClassic.length)
    // var indexAdvanced = Math.floor(Math.random() * weaponsAdvanced.length)

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