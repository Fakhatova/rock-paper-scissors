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
    var index = Math.floor(Math.random() * weaponsClassic.length)
    this.coronaWeapon = weaponsClassic[index]
    return this.coronaWeapon
  }

}