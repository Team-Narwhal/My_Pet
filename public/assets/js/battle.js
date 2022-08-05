import { DatabaseError } from "sequelize/types/index.js";
import { Battle } from "../lib/Battle.js";

// Establish Socket Connection
const socket = io();
socket.emit("joined");

// example to build off of
const yassBtn = document.getElementById("yass-btn");
const ewBtn = document.getElementById("ew-btn");

ewBtn.addEventListener("click", () => {
  socket.emit("ew", "ewwwwwww!");
});

yassBtn.addEventListener("click", () => {
  socket.emit("yass", "YASSSSSSSSS!");
});

socket.on("ew", (data) => {
  document.getElementById("socket-alert").textContent = data;
});

socket.on("yass", (data) => {
  document.getElementById("socket-alert").textContent = data;
});

// Global Variables
let myBattle;
let myPet;
//Asha
//Write a function to fetch login user's active pet
//inside the function we need to use the data to create the new instance of appropriate subclasses
const getUserPet = async () => {
  //get the users USERID using UUID
  //Check to see relation to the pet
  //Check to see if the pet is Active through userId
  const response = await fetch("/api/user/getUserId");
  const userId = await response.json();
  console.log(userId);
};
getUserPet();
// Socketio Join another player's room
// This is io.fetchSockets();
// [
//     Socket {
//       _events: [Object: null prototype] {},
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       nsp: Namespace {
//         _events: [Object: null prototype],
//         _eventsCount: 1,
//         _maxListeners: undefined,
//         sockets: [Map],
//         _fns: [],
//         _ids: 0,
//         server: [Server],
//         name: '/',
//         adapter: [Adapter],
//         [Symbol(kCapture)]: false
//       },
//       client: Client {
//         sockets: [Map],
//         nsps: [Map],
//         server: [Server],
//         conn: [Socket],
//         encoder: Encoder {},
//         decoder: [Decoder],
//         id: 'EFxbirJ61Nwios7NAAAA',
//         onclose: [Function: bound onclose],
//         ondata: [Function: bound ondata],
//         onerror: [Function: bound onerror],
//         ondecoded: [Function: bound ondecoded],
//         connectTimeout: undefined
//       },
//       data: {},
//       connected: true,
//       acks: Map(0) {},
//       fns: [],
//       flags: {},
//       server: Server {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         _nsps: [Map],
//         parentNsps: Map(0) {},
//         _path: '/socket.io',
//         clientPathRegex: /^\/socket\.io\/socket\.io(\.msgpack|\.esm)?(\.min)?\.js(\.map)?(?:\?|$)/,
//         _connectTimeout: 45000,
//         _serveClient: true,
//         _parser: [Object],
//         encoder: Encoder {},
//         _adapter: [class Adapter extends EventEmitter],
//         sockets: [Namespace],
//         opts: {},
//         eio: [Server],
//         httpServer: [Server],
//         engine: [Server],
//         [Symbol(kCapture)]: false
//       },
//       adapter: Adapter {
//         _events: [Object: null prototype] {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         nsp: [Namespace],
//         rooms: [Map],
//         sids: [Map],
//         encoder: Encoder {},
//         [Symbol(kCapture)]: false
//       },
//       id: 'tC9TyCN1heInRsReAAAB',
//       handshake: {
//         headers: [Object],
//         time: 'Thu Aug 04 2022 11:54:30 GMT-0700 (Pacific Daylight Time)',
//         address: '::1',
//         xdomain: false,
//         secure: false,
//         issued: 1659639270156,
//         url: '/socket.io/?EIO=4&transport=polling&t=O9gDOhj',
//         query: [Object: null prototype],
//         auth: {}
//       },
//       [Symbol(kCapture)]: false
//     }
//   ]

// Nolan
// Function for page initialization
const initBattle = async () => {
  // Handles await loading pet from database
  //send our pets stats to other socket.io user
  myPet = {
    // petFromDatabase.hp,
    // petFromDatabase.attack,
    // petFromDatabase.defense,
  };
  // Creates a new Battle class instance
  myBattle = new Battle();
  // start the battle
  startBattle();
};

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
  const sequenceDiv = document.getElementById("sequence-div");
  // Get the new sequence from the Battle object
  const sequence = myBattle.sequence;
  // Timeout function to clear the sequenceDiv
  const clearDiv = async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        sequenceDiv.innerHTML = "";
        setTimeout(() => resolve(), 800);
      }, 1000);
    });
  // Loop through the sequence and display to user
  for (const direction of sequence) {
    // Create and append appropriate Arrow image for every
    // direction in the sequence array one at a time
    let arrowImg = document.createElement("img");
    arrowImg.src = "/assets/images/battle/" + direction + "Arrow.svg";
    sequenceDiv.append(arrowImg);
    // Call clearDiv() to clear div with setTimeout timing
    await clearDiv();
  }
  // Show buttons to the user
};

// Function to emit success or fail to other socket user
// Param is either true for guessed sequence or false for failed guess
const defend = (success) => {
  if (success) {
    // emit a defend using socket
  } else {
    // emit a noDefend using socket
  }
};
// Listen for other socket user defend or noDefend
// if defend: change to this players turn
// if noDefend: subtract player's attack from opponents Pet hp

initBattle();

// generate a random room id if no rooms open
// Create a game Class instance
// Figure out socket rooms and connect to a game

//Asha
//Load the User's pet from database
// Create a JS class instance
//
const petCanvas = document.getElementById("petCanvas");
const battleButtons = document.querySelectorAll(".battle-button");
//Initialize the function which will start the same
//Add Event listeners to the buttons and grabbing the value of the buttons
console.log(battleButtons);
battleButtons.forEach((btn) => {
  console.log("loop");
  btn.addEventListener("click", (event) => {
    const direction = event.target.dataset.description;
    console.log(direction);
    myBattle.sequenceGuess.push(direction);
    const check = myBattle.sequenceCheck();
    if (check === "continue") {
      return;
    } else {
      defend(check);
      //check if the check is false
      //so the opponents attack this player.
      //substract opponent attack value from this player's pet HP value
    }
  });
});
