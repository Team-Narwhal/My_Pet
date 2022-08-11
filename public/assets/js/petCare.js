// Retreive user pet from DB
// import { init, myPet } from './playpen.js';
// Event listeners
// const wakeBtn = document.getElementById('wakeBtn');
const feedBtn = document.getElementById('feedBtn');
const medicineBtn = document.getElementById('medicineBtn');
const cleanBtn = document.getElementById('cleanBtn');
const startBattleBtn = document.getElementById('startBattleBtn');

// Feature for future devel: button to wake up your pet if sleeping

// A button to feed your hungry pet
feedBtn.addEventListener('click', async () => {
    if (myPet.hunger >= 100) {
        // Replace with modal in the future.
        // alert(`${myPet.name} is already full!`);
        return;
    }
    try {
        myPet.feed();
        const { id, health, hunger, poop } = myPet;
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
        draw(health, poop, hunger);
    } catch (error) {
        console.log(error);
    }
});

// A button give medicine to improve health
medicineBtn.addEventListener('click', async (event) => {
    if (myPet.health >= 8) {
        // Replace with modal in the future.
        // alert(`${myPet.name} doesn't need medicine!`);
        return;
    }
    try {
        myPet.medicine();
        const { id, health, hunger, poop } = myPet;
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
        draw(health, poop, hunger);
    } catch (error) {
        alert(error);
    }
});

// A button to clean up poop
cleanBtn.addEventListener('click', async (event) => {
    if (myPet.poop < 1) {
        // Replace with modal in the future.
        // alert(`${myPet.name}'s playpen is clean. Yay!`);
        return;
    }
    try {
        myPet.cleanPoop();
        const { id, health, hunger, poop } = myPet;
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
        draw(health, poop, hunger);
    } catch (error) {
        console.log(error);
    }
});

// Takes current iteration of pet to battle page
startBattleBtn.addEventListener('click', async (event) => {
    window.location.href = '/battle';
});
