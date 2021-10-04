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
        this.render()
      } while 
        (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
      console.log(this.prevGuesses)

    },

  getGuess() {

    let currentGuess = parseInt( prompt (`Pick a number between ${this.smallestNum} and ${this.biggestNum} to play!`))

    while 
      (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {

      currentGuess = parseInt( 

        prompt (`Gotta be a number between ${this.smallestNum} and ${this.biggestNum} to play! Keep trying until you get it right.`))

      }

      return currentGuess

    },

  render() {

    if 

    (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {

      alert(`Oh my, that's too high! You've already tried 
      ${this.prevGuesses.join()}.`)

      }  else if 

      (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {

        alert(`Oh no, that's too low! You've already tried 
        ${this.prevGuesses.join()}`)

      } else {

        alert(`Way to go, you got it! It only took you ${this.prevGuesses.length} tries to figure it out!`)

      }

    }

  }

    game.play()
    