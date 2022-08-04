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
//Nolan
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


