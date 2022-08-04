const wakeBtn = document.getElementById('wakeBtn');
const feedBtn = document.getElementById('feedBtn');
const medicineBtn = document.getElementById('medicineBtn');
const petTLCBtn = document.getElementById('petTLCBtn');
const startBattleBtn = document.getElementById('startBattleBtn');

wakeBtn.addEventListener('click', async (event) => {

});

feedBtn.addEventListener('click', async (event) => {

});

medicineBtn.addEventListener('click', async (event) => {

});

petTLCBtn.addEventListener('click', async (event) => {

});

startBattleBtn.addEventListener('click', async (event) => {
    try {
        

        window.location.href = '/battle';
    } catch (error) {
        alert(error);
    }
});
