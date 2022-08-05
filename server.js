require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const { createServer } = require("http");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
const routes = require("./routes");

const helpers = require("./utils/helpers");

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
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middlewares
app.use(express.static("public"));
app.use(session(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Add server listeners here!

// This stores the room to send to User for reference
// to the room id that they joined
let room;

io.on("connection", (socket) => {
  console.log(`Client connected ID: ${socket.id}`);
  console.log("room", io.sockets.adapter.rooms);

  // Add Users socket.id to a user array
  socket.on("joined", (data) => {
    const rooms = io.sockets.adapter.rooms;
    for (const [id, members] of rooms) {
      if (/^room/.test(id) && members.size < 2) {
        console.log(`User ${socket.id} joining room, joined room: ${id}`);
        room = id;
        socket.join(room);
        socket.to(room).emit("you-first", room);
        return;
      }
    }
    room = `room-${rooms.size}`;
    console.log(`This is the room: ${room} with user ${socket.id}`);
    socket.join(room);
    // socket.to(room).emit('lets-start', room);
  });

  socket.on("you-second", (roomId, pet) => {
    socket.to(roomId).emit("you-second", roomId, pet);
  });

  socket.on("transfer-pet", (roomId, pet) => {
    socket.to(roomId).emit("transfer-pet", pet);
  });

  socket.on("disconnect", () => {
    // emit kill switch to roommate
    // remove both users from room and delete room
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
  socket.on("defend", (roomId, enemyHp) => {
    socket.to(roomId).emit("defend", enemyHp);
  });
  socket.on("no-defend", (roomId, enemyHp) => {
    socket.to(roomId).emit("no-defend", enemyHp);
  });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () =>
    console.log(`Listening on PORT: ${PORT} Yass mama!`)
  );
});
