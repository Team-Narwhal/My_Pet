// Hide modals
// const petIsFull = document.getElementById('petIsFull');
// petIsFull.style.display === 'none';

// Add global variables here.
var myPet;

// Create an init function.
const init = async () => {
    // Await query for user's activ pet.
    const userResponse = await fetch("/api/user/getUserId");
    const userId = await userResponse.json();
    // Use petResponse to get active pet from the user's ID.
    const petResponse = await fetch(`/api/pet/${userId}`);
    const petData = await petResponse.json();

    // Add logic to create an instance of a creature class.
    if (petData.type === 'Jackalope') {
        myPet = new Jackalope(petData);
    } else if (petData.type === 'Unicorn') {
        myPet = new Unicorn(petData);
    } else if (petData.type === 'Yeti') {
        myPet = new Yeti(petData);
    }

    const canvas = document.getElementById('petCanvas');
    const canvasMove = document.getElementById('petMoveCanvas');
    fitToContainer(canvas, canvasMove);

    function fitToContainer(canvas, canvasMove) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = 585;
        canvas.height = 329;

        canvasMove.style.width = '100%';
        canvasMove.style.height = '100%';
        canvasMove.width = 585;
        canvasMove.height = 329;
    }



    // Call canvas to render the canvas screen.
    draw(myPet.health, myPet.poop, myPet.hunger);

    // Call fastForward to update the pet's stats.
    fastForward(petData.updatedAt);
}

function fastForward(updatedAt) {
    // updatedAt time compared to current date and time
    const nowDate = Date.now();
    const lastDate = new Date(updatedAt).getTime();
    const elapsedTime = nowDate - lastDate;

    const multiplier = Math.round(elapsedTime / 10000);
    decay(multiplier);
}

// Set poopIndex to zero.
let poopIndex = 0;

// Subtract attribute points at 10-second intervals.
const decay = (multiplier = 1) => {
    // Every 10 seconds, remove 1 point from hunger meter.
    if ((myPet.hunger - 1 * multiplier) < 0) {
        myPet.hunger = 0;
    } else {
        myPet.hunger -= 1 * multiplier;
    }

    // Every 10 seconds, remove 1 energy.
    if ((myPet.energy - 1 * multiplier) < 0) {
        myPet.energy = 0;
    } else {
        myPet.energy -= 1 * multiplier;
    }

    // Every 10 seconds, increase the poop index.
    poopIndex += 1 * multiplier;

    // When poopIndex is greater than or equal to 20, and myPet.poop is less than 4, increase pet's poop by 1.
    // If the poopIndex is greater than or equal to 40 and the pet's poop is less than four, set the pet's poop to 4 and the poopIndex to 0.
    if (poopIndex >= 40 && myPet.poop < 4) {
        myPet.poop = 4;
        poopIndex = 0;
    } else if (poopIndex >= 20 && myPet.poop < 4) {
        myPet.poop++;
        poopIndex = 0;
    }

    savePet();
}

// Run decay every 10 seconds.
setInterval(decay, 1000 * 10);

// Save a new instance of the pet.
const savePet = async () => {
    try {
        const newPetInstance = await fetch(`/api/pet/${myPet.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                energy: myPet.energy,
                health: myPet.health,
                hunger: myPet.hunger,
                isHappy: myPet.isHappy,
                poop: myPet.poop,
            }),
        });

        console.log(await newPetInstance.json());
    } catch (error) {
        console.log(error);
    }
};

init();