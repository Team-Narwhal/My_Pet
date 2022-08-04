import { Battle } from '../lib/Battle.js';

// Establish Socket Connection
const socket = io();
socket.emit('joined');

// example to build off of
const yassBtn = document.getElementById('yass-btn');
const ewBtn = document.getElementById('ew-btn');

ewBtn.addEventListener('click', () => {
    socket.emit('ew', 'ewwwwwww!');
});

yassBtn.addEventListener('click', () => {
    socket.emit('yass', 'YASSSSSSSSS!');
});

socket.on('ew', (data) => {
    document.getElementById('socket-alert').textContent = data;
});

socket.on('yass', (data) => {
    document.getElementById('socket-alert').textContent = data;
});

let myBattle;
let myPet;

const initBattle = async () => {
    // Handles await loading pet from database
    // creates Pet class instance
    // Creates a new Battle class instance
    myBattle = new Battle;
    // start the battle
    startBattle();

}

// Function for Starts Battle
const startBattle = () => {
    // generate a new sequence
    myBattle.generateSequence();
    // display the sequence
    displaySequence();
};

// Display Senquence Function
// This will be an interval function to display the sequence to 
// memorize to the player
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
        let arrowImg = document.createElement('img');
        arrowImg.src = '/assets/images/battle/' + direction + 'Arrow.svg';
        sequenceDiv.append(arrowImg);
        // Clear the div before next append
        await clearDiv();
    };
    // Show buttons to the user
}

// Function to emit success or fail to other socket user

// Function to listen for other socket user success or fail

initBattle();


// generate a random room id if no rooms open
// Create a game Class instance
// Figure out socket rooms and connect to a game

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


