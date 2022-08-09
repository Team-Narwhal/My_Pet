// Retreive user pet from DB
import { init, myPet } from './playpen.js';
// Event listeners
// const wakeBtn = document.getElementById('wakeBtn');
const feedBtn = document.getElementById('feedBtn');
const medicineBtn = document.getElementById('medicineBtn');
const cleanBtn = document.getElementById('cleanBtn');
const startBattleBtn = document.getElementById('startBattleBtn');

// Feature for future devel: button to wake up your pet if sleeping

// A button to feed your hungry pet
feedBtn.addEventListener('click', async () => {
    console.log("feed btn clicked", myPet);
    init();
    if (myPet.hunger >= 1000) {
        alert(`${myPet.name} is already full!`);
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
            console.log("success! line 35");
      // !!!TODO: Input actual funct name from Ivy !! Sends hungerlevel to canvass
             canvassHunger(hunger);      
        } catch (error) {
            alert(error);
            }
});

// A button give medicine to improve health
         // TODO: call a updateDatabase() to give medicine to the pet 
        // return with updated pet
medicineBtn.addEventListener('click', async (event) => {
    console.log("medicine btn clicked", myPet);
    init();
    
    if (myPet.health = 8) {
        alert(`${myPet.name} doesn't need medicine!`);
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
            console.log(response, "line 67 health, PetCare");
      // !!! TODO: Input actual funct name from Ivy !! Sends healthlevel to canvass
             heartStatus(health);      
        } catch (error) {
            alert(error);
            }
});


// A button to clean up poop
cleanBtn.addEventListener('click', async (event) => {
    console.log("cleaning btn clicked", myPet);
    init();
    if (myPet.poop > 0) {
        alert(`${myPet.name}'s playpen is clean. Yay!`);
        return;
    }
        try {
            myPet.cleanPoop();
            const poop = petData.poop;
            const id = petData.id;
            const response = await fetch(`/api/pet/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                    poop: poop,
                            })
                        });
            await response.json();
            console.log(response);
      // !!!TODO: Input actual funct name from Ivy !! Sends pooplevel to canvass
             canvassPoop(poop);      
        } catch (error) {
            alert(error);
            }
});


// Takes current iteration of pet to battle page
startBattleBtn.addEventListener('click', async (event) => {
    console.log("battle btn clicked!");
        window.location.href = '/battle';
});
