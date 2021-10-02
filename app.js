const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess() {
    let currentGuess = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    while (getGuess) {
      // parseInt(this.getGuess())
    }
    console.log()
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

game.getGuess()

// while currentGuess !== secretNum, getGuess
