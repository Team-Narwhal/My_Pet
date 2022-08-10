// Add required files/modules
// const sequelize = require('sequelize');
// const {
//     Pet,
//     Jackalope,
//     Unicorn,
//     Yeti,
// } = require('../../models');

/*use create()
every time you finish something, it should update its status
base your comparison on the updatedAt column vs. currentTime column
How would we do the interval thing?
Have a field in your user object for lastLoginTime (dateTime)
set currentTime  (signInDateTime) to LastLoginTime
Base it on the user rather than the pet
If it's been a day, the pet would be hungry
Maybe use just hunger for now and get the logic working */

/*table for pet types*/

// Add global variables here.
var myPet;

const init = async () => {
    // Await query for user's activ pet.
    const userResponse = await fetch("/api/user/getUserId");
    const userId = await userResponse.json();
    console.log(userId);
    // Use userResponse to get active pet.
    // getActivePetByUserId(userId);
    const petResponse = await fetch(`/api/pet/${userId}`);
    const petData = await petResponse.json();
    console.log(petData);
    // Add logic to create instance of creature class
    if (petData.type === 'Jackalope') {
        myPet = new Jackalope(petData);
    } else if (petData.type === 'Unicorn') {
        myPet = new Unicorn(petData);
    } else if (petData.type === 'Yeti') {
        myPet = new Yeti(petData);
    }
    decay(petData.updatedAt);
    fastForward(petData.updatedAt);
}

function fastForward(updatedAt) {
    console.log(updatedAt);
    // updatedAt time compared to current date and time
    const nowDate = Date.now();
    const lastDate = new Date(updatedAt).getTime();
    const elapsedTime = nowDate - lastDate;
    console.log(elapsedTime);

    const multiplier = elapsedTime / 10000;
    decay(multiplier);
    // Fast-forward hunger
    myPet.hunger -= Math.floor(elapsedTime / 43200);

    // const oneDay = elapsedTime % 86400000;
    // console.log(oneDay);
}

// Set poopIndex to zero.
let poopIndex = 0;

const decay = (multiplier = 1) => {
    // subtract attribute points at intervals (e.g., hunger, energy, etc.)
    // HEALTH
    /*Get the most recent health reading and store it here. Integrate happiness?*/
    console.log(myPet, typeof myPet);
    // myPet.health();

    // Every 10 seconds, remove 1 point from hunger meter.
    // Add if statement so that it doesn't go negative.
    myPet.hunger -= 1 * multiplier;

    // Every 10 seconds, remove 1 energy.
    myPet.energy -= 1 * multiplier;

    // Every 10 seconds, increase the poop index.
    poopIndex += 1 * multiplier;

    // When poopIndex is greater than or equal to 20, and myPet.poop is less than 4, increase pet's poop by 1.
    if (poopIndex >= 20 && myPet.poop < 4) {
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
            body: JSON.stringify(myPet),
        });

        newPetInstance.json();
    } catch (error) {
        console.log(error);
    }
};

init();

/* Add asychronous init function
myPet.init('addStuffHere', async (req, res) => {
    await loading logged in user's pet
    create new instance of specific type of Pet class
    trueStatus('last updated at' from database) {
        check when pet was last updated
        compare current time w/last updated time
        subtract necessary amount from hunger
        add poop
        etc.
        from current new Pet instance
        }

        decay();
        canvasDrawing();
    }
});


// updateDatabase(async (req, res) => {
//     try {
//         const updateSomething = await fetch('/', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 update: somethings.value,
//             })
//         });
//     } catch (error) {
//         alert(error);
//     }
// });*/