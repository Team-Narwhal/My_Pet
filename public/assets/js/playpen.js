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
    // console.log(userId);
    // Use userResponse to get active pet.
    const petResponse = await fetch(`/api/pet/${userId}`);
    console.log(petResponse);
    const petData = await petResponse.json();

    // Add logic to create instance of creature class
    if (petData.type === 'Jackalope') {
        myPet = new Jackalope(petData);
    } else if (petData.type === 'Unicorn') {
        myPet = new Unicorn(petData);
    } else if (petData.type === 'Yeti') {
        myPet = new Yeti(petData);
    }

    console.log(myPet);
    decay(petData.updatedAt);
    fastForward(petData.updatedAt);
    draw(myPet.health, myPet.poop, myPet.hunger)
}

function decay(updatedAt) {
    // subtract attribute points at intervals (e.g., hunger, energy, etc.)
    console.log(updatedAt);
}

function fastForward(updatedAt) {
    console.log(updatedAt);
    // Last updated at vs current time

    // const dateNow = new Date
}

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

updateDatabase(async (req, res) => {
        try {
            const updateSomething = await fetch('/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    update: somethings.value,
                })
            });

            await response.json();
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    });




decay() {
    subtract attribute points at intervals (e.g., hunger, energy, etc.)
}

*/

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
// });

init();
