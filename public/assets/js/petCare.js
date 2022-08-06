// Retreive user pet from DB
const { init } = require('./playpen')
// Event listeners
const wakeBtn = document.getElementById('wakeBtn');
const feedBtn = document.getElementById('feedBtn');
const medicineBtn = document.getElementById('medicineBtn');
const cleanBtn = document.getElementById('cleanBtn');
const startBattleBtn = document.getElementById('startBattleBtn');

// Feature for future devel: button to wake up your pet if sleeping
// wakeBtn.addEventListener('click', async (event) => {
//     // TODO: if sleeping, wake up. Otherwise do nothing 
//     // (Would be fun to add later, that it annoys the pet if you try to wake it up and it's already up, LOL)
//     try {
//         // TODO: call a updateDatabase() to change status to isActive 
//         // Pass to Function for Canvass to change pet's status
//     } catch (error) {
//         alert(error);
//     }
// });




// A button to feed your hungry pet
feedBtn.addEventListener('click', async (event) => {
    init();
    if (myPet.hunger >= 1000) {
        // !!TODO: Sends message to user, I'm full!
        return;
    }
        try {
            myPet.feed();
            const hunger = petData.hunger;
            const id = petData.id;
            const response = await fetch(`/api/pet/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                    hunger: hunger,
                            })
                        });
            await response.json();
            console.log(response);
      // !!! Input actual funct name from Ivy !! Sends hungerlevel to canvass
             canvassHunger(hunger);      
        } catch (error) {
            alert(error);
            }
});





// A button give medicine to improve health
         // TODO: call a updateDatabase() to give medicine to the pet 
        // return with updated pet
medicineBtn.addEventListener('click', async (event) => {
    init();
    if (myPet.health = 8) {
        // !!TODO: Sends message to user, your pet doesnt need medicine!
        return;
    }
        try {
            myPet.health();
            const health = petData.health;
            const id = petData.id;
            const response = await fetch(`/api/pet/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                    health: health,
                            })
                        });
            await response.json();
            console.log(response);
      // !!! Input actual funct name from Ivy !! Sends healthlevel to canvass
             canvassHealth(health);      
        } catch (error) {
            alert(error);
            }
});


// A button to clean up poop
cleanBtn.addEventListener('click', async (event) => {
    try {
         // TODO: call a updateDatabase() to clean up after the pet
        // return with updated playpen
    } catch (error) {
        alert(error);
    }
});


// Takes current iteration of pet to battle page
startBattleBtn.addEventListener('click', async (event) => {
    try {
        // Takes current instance/status of pet and passes it to the battle page

        window.location.href = '/battle';
    } catch (error) {
        alert(error);
    }
});
