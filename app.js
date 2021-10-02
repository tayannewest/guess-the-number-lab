const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess() {
    console.log(this.secretNum)
    let currentGuess = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    // const parsed = parseInt(this.currentGuess)
      while (currentGuess > this.biggestNum || currentGuess < this.smallestNum) {
        currentGuess = prompt (`gotta be between ${this.smallestNum} and ${this.biggestNum} pal`)
        }
  },
}

// game.getGuess()
// game.play()
// console.log(game.secretNum)


// const parsed = parseInt(this.currentGuess)
// while (parsed !== this.secretNum) {
//   return this.getGuess()
// }

game.play()

// const game = {
//   title: 'Guess the Number!',
//   biggestNum: 100,
//   smallestNum: 1,
//   secretNum: null,
//   prevGuesses: [],
//   getGuess() {
//     let userInput = prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`); {
//       while (userInput > this.biggestNum || userInput < this.smallestNum) {
//         userInput = prompt (`That isn't how you play this game cowboy, the guess must be between ${this.biggestNum} and ${this.smallestNum}. Please guess again.`)
//       }
//       // return userInput
//     }  // function sortGuess(userInput) 
// },
//   play: function() {
//     this.secretNum = Math.floor(Math.random() * 
//       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//       while (smallestNum >= 1 && biggestNum <= 100) {
//         ;
//       }
//     },
// }

// game.getGuess()