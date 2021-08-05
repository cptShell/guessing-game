class GuessingGame {
  constructor() {
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const guessNum = this.max - Math.floor((this.max - this.min) / 2);
    this.currentGuess = guessNum;
    return guessNum;
  }

  lower() {
    this.max = this.currentGuess;
  }

  greater() {
    this.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
