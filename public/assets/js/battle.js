// Global Variables
let myBattle;
let myPet;
let enemyPet;
let room;

// Establish Socket Connection
const socket = io();

// Nolan
// Function for page initialization
const startDiv = document.getElementById('start-div');
const init = async () => {
    // Call the function to get current user's pet

    // Creates a new Battle class instance
    myBattle = new Battle;
    // show start button once everything is loaded
    startDiv.style.display = 'block';
};

socket.on('you-first', (roomId) => {
    // emit you-second event to send to other user
    // send the room Id, and this user's pet
    socket.emit('you-second', roomId, myPet);
    myBattle.room = roomId;
    startBattle();
});

// If you-second, this gets enemyPet
socket.on('you-second', (roomId, pet) => {
    room = roomId;
    enemyPet = pet;
    myBattle.room = roomId;
    socket.emit('transfer-pet', roomId, myPet);
});

// If you-first, this gets enemyPet
socket.on('transfer-pet', (pet) => {
    enemyPet = pet;
});

// Asha
// 'defend' listener
// needs to appropriately handle Pet's hp value for our enemyPet
// needs to call startBattle()
socket.on('defend', () => {
    startBattle();
});

// Asha
// write a 'no-defend' listener
// needs to appropriately handle Pet's hp value
// needs to call startBattle()

// Nolan
// Function for Starts Battle
const startBattle = () => {
    // generate a new sequence
    myBattle.generateSequence();
    // display the sequence
    displaySequence();
};

// Nolan
// Display Senquence Function
// Uses a setTimeout function to display the sequence to 
// memorize to the player, arrows 'flash' one at a time
const displaySequence = async () => {
    // Get the sequence div to append to
    const sequenceDiv = document.getElementById('sequence-div');
    // Get the new sequence from the Battle object
    const sequence = myBattle.sequence;
    // Timeout function to clear the sequenceDiv
    const clearDiv = async () => await new Promise(resolve => {
        setTimeout(() => {
            sequenceDiv.innerHTML = '';
            setTimeout(() => resolve(), 800);
        }, 1000);
    });
    // Loop through the sequence and display to user
    for (const direction of sequence) {
        // Create and append appropriate Arrow image for every
        // direction in the sequence array one at a time
        let arrowImg = document.createElement('img');
        arrowImg.src = '/assets/images/battle/' + direction + 'Arrow.svg';
        sequenceDiv.append(arrowImg);
        // Call clearDiv() to clear div with setTimeout timing
        await clearDiv();
    };
    // Show buttons to the user
    const gammingBtnDiv = document.getElementById('gamingButtons');
    gammingBtnDiv.style.display = 'block';
}

// Function to emit success or fail to other socket user
// Param is either true for guessed sequence or false for failed guess
const defend = (success) => {
    // Hide buttons from User
    const gammingBtnDiv = document.getElementById('gamingButtons');
    gammingBtnDiv.style.display = 'block';
    if (success) {
        // emit a 'defend' using socket
    }
    else {
        // emit a 'no-defend' using socket
    }
};


//Asha
//Load the User's pet from database
// Create a JS class instance
//
const petCanvas = document.getElementById('petCanvas');
const battleButtons = document.querySelectorAll('.battle-button')
//Initialize the function which will start the same 
//Add Event listeners to the buttons
console.log(battleButtons);
battleButtons.forEach(btn => {
    console.log('loop');
    btn.addEventListener( 'click',(event) => {
    const direction = event.target.dataset.description;
    console.log(direction);

    })
});

// Nolan
// start button for the battle to emit joined event
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
    socket.emit('joined');
    // Hide the start button
    startDiv.style.display = 'none';
});

// Start the app initialization
init();