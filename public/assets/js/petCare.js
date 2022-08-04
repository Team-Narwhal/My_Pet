const wakeBtn = document.getElementById('wakeBtn');
const feedBtn = document.getElementById('feedBtn');
const medicineBtn = document.getElementById('medicineBtn');
const cleanBtn = document.getElementById('cleanBtn');
const startBattleBtn = document.getElementById('startBattleBtn');

// A button to wake up your pet if sleeping
wakeBtn.addEventListener('click', async (event) => {
    // TODO: if sleeping, wake up. Otherwise do nothing (Would be fun to add 
    // later, that it annoys the pet if you try to wake it up and it's already up, LOL)
    try {
        // TODO: call a updateDatabase() to wake the pet 
        // return with updated pet 
    } catch (error) {
        alert(error);
    }
});


// A button to feed your hungry pet
feedBtn.addEventListener('click', async (event) => {
    try {
         // TODO: call a updateDatabase() to feed the pet 
        // return with updated pet
    } catch (error) {
        alert(error);
    }
});


// A button give medicine to improve health
medicineBtn.addEventListener('click', async (event) => {
    try {
         // TODO: call a updateDatabase() to give medicine to the pet 
        // return with updated pet
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
