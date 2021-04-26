class Player {
  constructor() {
    this.name = null;
    this.wins = null;
    this.token = null;
  }

  saveHumanWinsToStorage() {
    var human = game.human
    localStorage.setItem('human', JSON.stringify(human))
  }


  saveCoronaWinsToStorage() {
    var corona = game.corona
    localStorage.setItem('corona', JSON.stringify(corona))
  }

  retrieveHumanWinsFromStorage() {
    var humanWins = localStorage.getItem('human');
    humanWins = JSON.parse(humanWins)
    if (humanWins) {
      return humanWins.wins;
    } else {
      return 0;
    }
  }

  retrieveCoronaWinsFromStorage() {
    var coronaWins = localStorage.getItem('corona')
    coronaWins = JSON.parse(coronaWins)
    if (coronaWins) {
      return coronaWins.wins;
    } else {
      return 0;
    }
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