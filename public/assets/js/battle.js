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

// generate a random room id if no rooms open


// Load the User's pet from database
// Create a JS class instance
// Create a game Class instance

// Figure out socket rooms and connect to a game



