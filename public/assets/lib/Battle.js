class Battle {

  constructor() {
    this.sequence = [];
    this.sequenceGuess = [];
    this.round = 0;
    this.roomId = '';
    this.phrases = {
      greeting: [
        'Welcome to your demise!',
        "I don't think you can handle this!",
        "Surprised you're not scared.",
      ],
      noDefend: [
        'OUCH!',
        'AHHHHHH!',
        'HELP ME!',
      ],
      defend: [
        "Can't touch this!",
        "Well that didn't hurt...",
        "Just give up!",
      ],
      attack: [
        "This is gonna hurt!",
        "WooooAAHHHHH!",
        "Brace yourself!",
      ]

    }
  }

  // Function to generate random gameplay phrases
  talk(type) {
    // generate random number 0-2
    const index = Math.floor(Math.random() * 3);
    switch (type) {
      case 'greeting':
        return this.phrases.greeting[index];
      case 'noDefend':
        return this.phrases.noDefend[index];
      case 'defend':
        return this.phrases.defend[index];
      case 'attack':
        return this.phrases.attack[index];
      default:
        return this.phrases.greeting[index];
    };
  }

  // Function to generate a random sequence of u, d, r, l
  // returns an array of direction letters
  generateSequence(num = 4) {
    const directions = ['u', 'd', 'r', 'l',];
    let sequence = [];
    for (let i = 0; i < num; i++) {
      // pushes a random element from directions array
      sequence.push(directions[Math.floor(Math.random() * 4)]);
    };
    this.sequence = sequence;
  };

  // Function to check the user's sequence guess
  // Will return success either true/false
  sequenceCheck() {
    const answer = this.sequence;
    const guess = this.sequenceGuess;
    if (answer.length === guess.length) {
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === guess[i]) {
          continue;
        }
        else {
          this.sequenceGuess = [];
          return false;
        };
      };
      this.sequenceGuess = [];
      return true;
    };
    return 'continue';
  };


}
