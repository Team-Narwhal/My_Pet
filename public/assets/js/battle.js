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