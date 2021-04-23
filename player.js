class Player {
  constructor(name, wins, token) {
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
      console.log('heyooo')
    } else {
      game.coronaTurn = 'second'
      game.corona.name = 'Corona'
      game.corona.token = '🦠'
      console.log('coronas turn')
    }
  }

}