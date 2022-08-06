// Add required files/modules
const sequelize = require('sequelize');
const {
    Pet,
    Jackalope,
    Unicorn,
    Yeti,
} = require('../../models');

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
let myPet;

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
        myPet = new Jackalope;
    } else if (petData.type === 'Unicorn') {
        myPet = new Unicorn;
    } else if (petData.type === 'Yeti') {
        myPet = new Yeti;
    }
}

fastForward(lastUpdatedAt) {
    // Last updated at vs current time
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

decay() {

    // subtract attribute points at intervals (e.g., hunger, energy, etc.)
}

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