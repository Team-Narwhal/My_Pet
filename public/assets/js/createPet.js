// const choosePetType = document.getElementById('choosePetType');
const petNameInput = document.getElementById('petNameInput');
const createPetBtn = document.getElementById('createPetBtn');
const typeSelect = document.getElementById('choosePetType');
// let value = select.options[select.selectedIndex].value;
// console.log(value, 'Roar!');

createPetBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const petType = typeSelect.value;
    const name = petNameInput.value;

    // Checks to make sure a type of pet is selected.
    if (typeSelect.length === 0) {
        alert('Please select a pet type.');
        return;
    }

    // Checks to make sure petName is not empty.
    if (petNameInput.value.trim().length === 0) {
        alert('Please give your pet a name.');
        return;
    }

    // Posts the user input to the endpoint.
    try {
        const userResponse = await fetch('/api/user/getUserId');
        const userId = await userResponse.json();
        console.log(userId, 'GERONIMOOOOOO!');
        const response = await fetch('/api/pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                type: petType,
                name: name,
                // hunger,
                // energy,
                // health,
                // isAlive,
                // isActive,
                // poop,
                // level,
                // isHappy,
                // attack,
                // hp,
                // type,
                // defense,
            }),
        });
        console.log(response);
        await response.json();
        console.log(response);
        // Change user window to the /playpen (environment) endpoint.
        // window.location.href = '/playpen';
    } catch (error) {
        console.log(error);
        alert(error);
    }
});

