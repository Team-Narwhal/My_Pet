// Global Variables
let myBattle;
let myPet;
let enemyPet;
let room;

// Nolan
// Implementation of the Confetti API via CDN script
let myCanvas = document.createElement("canvas");
let characterContainer = document.getElementById("character-container");
myCanvas.style =
  "width: 100%; height: 100%; position: absolute; top: 0; z-index: 1;";
characterContainer.appendChild(myCanvas);

let myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

//Asha
//Write a function to fetch login user's active pet
//inside the function we need to use the data to create the new instance of appropriate subclasses
const getUserPet = async () => {
  //get the users USERID using UUID
  //Check to see relation to the pet
  //Check to see if the pet is Active through userId
  const response = await fetch("/api/user/getUserId");
  const userId = await response.json();
  const petResponse = await fetch(`/api/pet/${userId}`);
  myPet = await petResponse.json();
  return myPet;
};

// Establish Socket Connection
const socket = io();

// Asha
// Function for page initialization
const startDiv = document.getElementById("start-div");
const petImage = document.getElementById("me-img");
const enemyImage = document.getElementById("enemy-img");
const init = async () => {
  // Creates a new Battle class instance
  myBattle = new Battle();
  // show start button once everything is loaded
  await getUserPet();
  petImage.src = `/assets/images/battle/pets/${myPet.type}/normal_face/right.png`;
  myPet.maxHp = myPet.hp;
  let maxHp = document.getElementById("my-hp");
  maxHp.setAttribute("max", myPet.hp);
  updateHealthBar();
  startDiv.style.display = "block";
};
//Calculation function to update the health/progress bar/

const updateHealthBar = async () => {
  let myHp = document.getElementById("my-hp");
  let mypettext = document.getElementById('mypettext')
  let myenemytext = document.getElementById('myenemytext')
  myHp.setAttribute("value", myPet.hp);
  mypettext.textContent = `${myPet.name} ${Math.round((myPet.hp / myPet.maxHp) * 100)}%`;

  if (enemyPet) {
    let enemyhp = document.getElementById("enemy-hp");
    enemyhp.setAttribute("value", enemyPet.hp);
    myenemytext.textContent = `${enemyPet.name} ${Math.round((enemyPet.hp / enemyPet.maxHp) * 100)}%`;
  }
};

//Function to end the battle
const endGame = async (win) => {
  const sequenceDiv = document.getElementById("sequence-div");
  let messageEl = document.createElement("p");
  if (win) {
    // Change myPet to isHappy: true
    myPet.isHappy = true;
    // Set text content for win case
    myConfetti({
      particleCount: 100,
      spread: 160,
      // any other options from the global
      // confetti function
    });
    messageEl.textContent = "Conqueror";
  } else {
    // Subtract a heart from myPet.health
    myPet.health -= 2;
    // Set text content for lose case
    messageEl.textContent = "Deadbeat";
  }

  messageEl.classList.add("jello-vertical");
  messageEl.style.fontFamily = "'Press Start 2P', cursive";
  messageEl.style.fontSize = "25px";

  sequenceDiv.appendChild(messageEl);
  // Update Pet stats in the Database
  try {
    const response = await fetch(`/api/pet/${myPet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isHappy: myPet.isHappy,
        health: myPet.health,
      }),
    });
    console.log(await response.json());
  } catch (error) {
    console.log({ error });
  }

  // Redirect to /playpen after 5 seconds.
  setTimeout(() => (window.location.href = "/playpen"), 5000);
};

// Nolan
// conversation Function to show cute messages
// type param: 'greeting', 'noDefend', 'defend', 'attack'
// who param: 'me', 'enemy'
const conversation = (type, who) => {
  const meTalk = document.getElementById("me-talk");
  const enemyTalk = document.getElementById("enemy-talk");
  const phrase = myBattle.talk(type);
  if (who === "me") {
    meTalk.textContent = phrase;
    meTalk.parentElement.style.display = "block";
    setTimeout(() => {
      meTalk.parentElement.style.display = "none";
    }, 5000);
  } else {
    enemyTalk.textContent = phrase;
    enemyTalk.parentElement.style.display = "block";
    setTimeout(() => {
      enemyTalk.parentElement.style.display = "none";
    }, 5000);
  }
};

//function for enemy-hit
const hitFace = (who) => {
  if (who === "me") {
    petImage.src = `/assets/images/battle/pets/${myPet.type}/hit_face/right.png`;
    setTimeout(() => {
      petImage.src = `/assets/images/battle/pets/${myPet.type}/normal_face/right.png`;
    }, 5000);
  } else {
    enemyImage.src = `/assets/images/battle/pets/${enemyPet.type}/hit_face/left.png`;
    setTimeout(() => {
      enemyImage.src = `/assets/images/battle/pets/${enemyPet.type}/normal_face/left.png`;
    }, 5000);
  }
};

// If opponent disconnects, end game
socket.on("user-left", () => {
  // If game is already ended, return
  if (myBattle.isEnded) return;
  // Call end game function with win case
  endGame(true);
});

socket.on("you-first", (roomId) => {
  // emit you-second event to send to other user
  // send the room Id, and this user's pet
  socket.emit("you-second", roomId, myPet);
  myBattle.room = roomId;
});

// If you-second, this gets enemyPet
socket.on("you-second", (roomId, pet) => {
  const waitingDiv = document.getElementById('waiting-div');
  waitingDiv.style.display = 'none';
  const battleText = document.getElementById('battle-message');
  battleText.style.display = 'none';
  const hpDivs = document.querySelectorAll('.hp-div');
  for (const hpDiv of hpDivs) {
    hpDiv.style.display = 'block';
  }
  room = roomId;
  enemyPet = pet;
  enemyPet.maxHp = enemyPet.hp;
  enemyImage.src = `/assets/images/battle/pets/${enemyPet.type}/normal_face/left.png`;
  enemyImage.style.display = "block";
  petImage.style.display = "block";
  myBattle.room = roomId;
  socket.emit("transfer-pet", roomId, myPet);
  let maxHp = document.getElementById("enemy-hp");
  maxHp.setAttribute("max", enemyPet.hp);
  updateHealthBar();
  conversation("greeting", "me");
  conversation("greeting", "enemy");
});

// If you-first, this gets enemyPet
socket.on("transfer-pet", (pet) => {
  const waitingDiv = document.getElementById('waiting-div');
  waitingDiv.style.display = 'none';
  const battleText = document.getElementById('battle-message');
  battleText.style.display = 'none';
  const hpDivs = document.querySelectorAll('.hp-div');
  for (const hpDiv of hpDivs) {
    hpDiv.style.display = 'block';
  }
  enemyPet = pet;
  enemyPet.maxHp = enemyPet.hp;
  enemyImage.src = `/assets/images/battle/pets/${enemyPet.type}/normal_face/left.png`;
  enemyImage.style.display = "block";
  petImage.style.display = "block";
  let maxHp = document.getElementById("enemy-hp");
  maxHp.setAttribute("max", enemyPet.hp);
  updateHealthBar();
  conversation("greeting", "me");
  conversation("greeting", "enemy");
  startBattle();
});

// Asha
// 'defend' listener
// needs to appropriately handle Pet's hp value for our enemyPet
// needs to call startBattle()
socket.on("defend", (enemyHp) => {
  enemyPet.hp = enemyHp;
  conversation("defend", "enemy");
  startBattle();
  updateHealthBar();
});

// Asha
// write a 'no-defend' listener
// needs to appropriately handle Pet's hp value
// needs to call startBattle()
socket.on("no-defend", (enemyHp) => {
  enemyPet.hp = enemyHp;
  conversation("noDefend", "enemy");
  startBattle();
  updateHealthBar();
  hitFace('enemy');
});

socket.on("you-win", () => {
  myBattle.isEnded = true;
  enemyPet.hp = 0;
  updateHealthBar();
  endGame(true);
});

// Nolan
// Function for Starts Battle
const startBattle = () => {
  conversation("attack", "me");
  // Increment Round
  myBattle.round++;
  // generate a new sequence
  myBattle.generateSequence(myBattle.round + 3);
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
  // Shorter timeout each round
  const clearDiv = async () => {
    const hideTime = 4000 / (myBattle.round + 3);
    const pauseTime = 3200 / (myBattle.round + 3);
    await new Promise((resolve) => {
      setTimeout(() => {
        sequenceDiv.innerHTML = "";
        setTimeout(() => resolve(), pauseTime);
      }, hideTime);
    });
  };
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
  const gammingBtnDiv = document.getElementById("gamingButtons");
  gammingBtnDiv.style.display = "block";
};

// Function to emit success or fail to other socket user
// Param is either true for guessed sequence or false for failed guess
const defend = (success) => {
  // Hide buttons from User
  const gammingBtnDiv = document.getElementById("gamingButtons");
  gammingBtnDiv.style.display = "none";
  if (success) {

    if (enemyPet.attack > myPet.defense) {
      myPet.hp -= enemyPet.attack - myPet.defense;
      if (myPet.hp < 0) myPet.hp = 0;
    }
    if (myPet.hp <= 0) {
      //endBattle
      updateHealthBar();
      endGame(false);
      myBattle.isEnded = true;
      socket.emit("you-win", myBattle.room);
    } else {
      // Display conversation bubbles
      conversation("defend", "me");
      conversation("attack", "enemy");
      socket.emit("defend", myBattle.room, myPet.hp);
      updateHealthBar();
    }
  } else {
    // Subtract enemy attack from myPet hp
    myPet.hp -= enemyPet.attack;
    if (myPet.hp < 0) myPet.hp = 0;
    if (myPet.hp <= 0) {
      updateHealthBar();
      endGame(false);
      myBattle.isEnded = true;
      socket.emit("you-win", myBattle.room);
    } else {
      // Display conversation bubbles
      conversation("noDefend", "me");
      conversation("attack", "enemy");
      // emit a 'no-defend' using socket
      socket.emit("no-defend", myBattle.room, myPet.hp);
      updateHealthBar();
      hitFace('me');
    }
  }
};

//Asha
//Load the User's pet from database
// Create a JS class instance
const petCanvas = document.getElementById("petCanvas");
const battleButtons = document.querySelectorAll(".battle-button");
//Initialize the function which will start the same
//Add Event listeners to the buttons and grabbing the value of the buttons
battleButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const direction = event.target.dataset.description;
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

// Nolan
// start button for the battle to emit joined event
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  // Show waiting-div
  const waitingText = document.getElementById('waiting-div');
  waitingText.style.display = 'block';

  socket.emit("joined");
  // Hide the start button
  startDiv.style.display = "none";
});

// Start the app initialization
init();
