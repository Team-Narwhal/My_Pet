require('dotenv').config();
const express = require('express');
const socket = require('socket.io');
const { createServer } = require('http');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./routes');

const helpers = require('./utils/helpers');

const hbs = exphbs.create({
    helpers,
});

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const app = express();

// create socket server
const server = createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 3001;

// Template Engine Setup: sets up express with handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// middlewares
app.use(express.static('public'));
app.use(session(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



// Add server listeners here!
// Ask how and where to export.

let room;

io.on("connection", async (socket) => {
    console.log(`Client connected ID: ${socket.id}`, io.sockets.connected);
    console.log('room', io.sockets.adapter.rooms);


    // Add Users socket.id to a user array
    socket.on('joined', (data) => {
        const rooms = io.sockets.adapter.rooms;
        for (const [id, members] of rooms) {
            if (/^room/.test(id) && members.size < 2) {
                console.log('hey');
                room = id;
                socket.join(room);
                socket.to(room).emit('lets-start', room);
                return;
            };
            room = `room-${rooms.size}`;
            console.log(`This is the room: ${room}`);
            socket.join(room);
        };
    });

    socket.on('disconnect', () => {
        // sequenceNumberByClient.delete(socket);
        console.log(`User disconnected ID: ${socket.id}`);
    });

    socket.on("ew", (data) => {
        console.log(data);
        socket.broadcast.emit("ew", data);
    });

    socket.on("yass", (data) => {
        console.log(data);
        // to exclude sender use broadcast
        socket.broadcast.emit("yass", data);
        // to include sender use 
        // io.emit('yass', data);
    });
});


sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Listening on PORT: ${PORT} Yass mama!`));
})