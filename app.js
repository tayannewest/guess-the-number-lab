const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess()) 
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
      console.log(this.prevGuesses)
    },
  getGuess() {
    let currentGuess = null
    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt( 
        prompt (`Guess a number between ${this.smallestNum} and ${this.biggestNum} to play!`))
      }
      return currentGuess
    },
  }
  
  
  
    // game.getGuess()
    game.play()
    