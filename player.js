class Player {
  constructor() {
    this.name = null;
    this.wins = 0;
    this.token = null;

  }

  saveWinsToStorage() {
    var human = game.human
    var corona = game.corona

    localStorage.setItem('humanWins', JSON.stringify(human))
    localStorage.setItem('coronaWins', JSON.stringify(corona))
    // console.log(JSON.stringify(human));
    // console.log(JSON.stringify(corona))
  }

  retrieveWinsFromStorage() {
    var scores = JSON.parse(localStorage.getItem(`${this.name}`)) || 0;
    return scores;
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