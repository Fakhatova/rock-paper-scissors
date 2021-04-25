class Game {
  constructor() {
    this.human = new Player()
    this.corona = new Player()
    this.gameType = null;
    this.weaponsClassic = ['rock', 'paper', 'scissors'];
    // this.weaponsAdvanced = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    this.isGameOn = true;
    this.humanWeapon = null;
    this.coronaWeapon = null;
    this.humanTurn = null;
    this.coronaTurn = null;
  }

  setTheGameOff() {
    this.isGameOn = !this.isGameOn
  }
  randomGuess(weaponsClassic) {
    // console.log('hello')
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
      (this.humanWeapon === 'scissors' && this.coronaWeapon === 'paper') ||
      (this.humanWeapon === 'scissors' && this.coronaWeapon === 'lizard') || (this.humanWeapon === 'spock' && this.coronaWeapon === 'scissors')) {
      return true;
    } else {
      return false;
    }
  }

  resetBoard(humanWeapons, coronaWeapons, winnerText) {
    if (!this.setTheGameOff()) {
      setTimeout(function() {
        humanWeapons.innerHTML = ''
        coronaWeapons.innerHTML = ''
        winnerText.innerHTML = ''
      }, 1500);
    }
  }
}