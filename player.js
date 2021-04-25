class Player {
  constructor() {
    this.name = null;
    this.wins = null;
    this.token = null;

  }

  saveWinsToStorage() {
    var human = game.human
    var corona = game.corona

    localStorage.setItem('human', JSON.stringify(human))
    localStorage.setItem('corona', JSON.stringify(corona))
  }

  // retrieveWinsFromStorage() {
  //   console.log(localStorage.getItem('corona'));
  //   console.log(localStorage.getItem('human'));
  //   var scores = JSON.parse(localStorage.getItem(`${this.wins}`));
  //   console.log(scores)
  //   return scores;
  // }

  retrieveHumanWinsFromStorage() {
    console.log('in human from storage');
    var humanWins = localStorage.getItem('human');
    humanWins = JSON.parse(humanWins)
    return humanWins.wins;
  }

  retrieveCoronaWinsFromStorage() {
    console.log('in corona from storage');
    var coronaWins = localStorage.getItem('corona')
    coronaWins = JSON.parse(coronaWins)
    return coronaWins.wins;
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