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

// create socket server
const server = createServer(app);
const io = socket(server);

// Add server listeners here!
// Ask how and where to export.
io.on("connection", (socket) => {
    console.log("Made socket connection", socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

    socket.on("ew", (data) => {
        console.log(data);
        io.emit("ew", data);
    });

    socket.on("yass", (data) => {
        console.log(data);
        io.emit("yass", data);
    });

});


sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`Listening on PORT: ${PORT} Yass mama!`));
})