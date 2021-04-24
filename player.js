class Player {
  constructor() {
    // this.id = Date.now();
    this.name = null;
    this.wins = 0;
    this.token = null;

  }

  saveWinsToStorage() {
    var human = game.human
    var corona = game.corona

    localStorage.setItem('humanWins', JSON.stringify(human))
    localStorage.setItem('coronaWins', JSON.stringify(corona))
    console.log(JSON.stringify(human));
    console.log(JSON.stringify(corona))
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