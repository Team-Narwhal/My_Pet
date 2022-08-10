// const choosePetType = document.getElementById('choosePetType');
const petNameInput = document.getElementById('petNameInput');
const createPetBtn = document.getElementById('createPetBtn');


createPetBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    // const petType = choosePetType.value;
    const name = petNameInput.value;

    // checks to make sure petName is not empty
    if (name.trim().length === 0) {
        alert('Please give your pet a name.');
        return;
    }
    // posts the user input to the  endpoint
    try {
        const userId = await fetch('/api/user/getUserId');
        const response = await fetch('/api/pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                // petType,
                name,
            })
        });
        await response.json();
        console.log(response);
        // change user window to the /playpen (environment) endpoint
        window.location.href = '/playpen';
    } catch (error) {
        alert(error);
    }
});

