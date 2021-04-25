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
    console.log('in function')
    if (this.gameType === 'Classic') {
      console.log('in classic if');
      var index = Math.floor(Math.random() * weaponsClassic.length)
      this.coronaWeapon = weaponsClassic[index]
      console.log('its working 1')
      return this.coronaWeapon
    }
    if (this.gameType === 'Advanced') {
      console.log('in advanced condition');
      var indexAdvanced = Math.floor(Math.random() * this.weaponsAdvanced.length)
      this.coronaWeapon = this.weaponsAdvanced[indexAdvanced]
      console.log('in advanced')
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