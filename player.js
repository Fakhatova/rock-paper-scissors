class Player {
  constructor() {
    // this.id = Date.now();
    this.name = null;
    this.wins = 0;
    this.token = null;

  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
  takeTurns() {
    if (game.humanTurn === null) {
      game.humanTurn = 'first'
      game.human.name = 'Human'
      game.human.token = '👩🏻‍⚕️'
    } else {
      game.coronaTurn = 'second'
      game.corona.name = 'Corona'
      game.corona.token = '🦠'
    }
  }

}