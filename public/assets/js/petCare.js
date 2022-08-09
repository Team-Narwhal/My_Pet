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
    init();
    if (myPet.hunger >= 100) {
        alert(`${myPet.name} is already full!`);
        return;
    }
        try {
            myPet.feed();
            const hunger = myPet.hunger;
            const id = myPet.id;
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
            console.log("Pet hunger updated in db!");
             canvassHunger(hunger);      
        } catch (error) {
            alert(error);
            }
});

// A button give medicine to improve health
medicineBtn.addEventListener('click', async (event) => {
    init();
    if (myPet.health >= 8) {
        alert(`${myPet.name} doesn't need medicine!`);
        return;
    }
        try {
            myPet.medicine();
            const health = myPet.health;
            const id = myPet.id;
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
            console.log(response, "Updated health in db");
            heartStatus(health);      
        } catch (error) {
            alert(error);
            }
});


// A button to clean up poop
cleanBtn.addEventListener('click', async (event) => {
    console.log("cleaning btn clicked", myPet);
    init();
    if (myPet.poop <= 0) {
        alert(`${myPet.name}'s playpen is clean. Yay!`);
        return;
    }
        try {
            console.log("before cleaning", myPet);

            myPet.cleanPoop();
            console.log("after cleaning", myPet);

            const poop = myPet.poop;
            const id = myPet.id;
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
