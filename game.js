class Game {
  constructor() {
    this.human = new Player()
    this.corona = new Player()
    this.gameType = null;
    this.weaponsClassic = ['rock', 'paper', 'scissors'];
    this.weaponsAdvanced = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    this.isGameOn = true;
    this.humanWeapon = null;
    this.coronaWeapon = null;
    this.humanTurn = null;
    this.coronaTurn = null;
  }

  setTheGameOff() {
    this.isGameOn = !this.isGameOn
  }

  randomGuess(weaponsClassic, weaponsAdvanced) {
    if (this.gameType === 'Classic') {
      var index = Math.floor(Math.random() * weaponsClassic.length)
      this.coronaWeapon = weaponsClassic[index]
      return this.coronaWeapon
    }
    if (this.gameType === 'Advanced') {
      var indexAdvanced = Math.floor(Math.random() * this.weaponsAdvanced.length)
      this.coronaWeapon = this.weaponsAdvanced[indexAdvanced]
      return this.coronaWeapon

    }
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
      (this.humanWeapon === 'scissors' && this.coronaWeapon === 'lizard') ||
      (this.humanWeapon === 'spock' && this.coronaWeapon === 'scissors') ||
      (this.humanWeapon === 'spock' && this.coronaWeapon === 'rock') ||
      (this.humanWeapon === 'lizard' && this.coronaWeapon === 'paper') ||
      (this.humanWeapon === 'lizard' && this.coronaWeapon === 'spock')) {
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