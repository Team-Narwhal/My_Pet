class Battle {
    constructor() {
        this.sequence = [];
        this.sequenceGuess = [];
        this.turn = true;
        this.roomId = '';
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
                    return false;
                };
            };
            this.sequenceGuess = [];
            return true;
        };
        return 'continue';
    };


}