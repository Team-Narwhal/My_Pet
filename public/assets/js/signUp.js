const signUpBtn = document.getElementById('signUpBtn');
const signUpEmailInput = document.getElementById('signUpEmailInput');
const signUpPasswordInput = document.getElementById('signUpPasswordInput');
const signUpPasswordConfirmInput = document.getElementById('signUpPasswordConfirmInput');

signUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = signUpEmailInput.value;
    const password = signUpPasswordInput.value;
    const passwordConfirm = signUpPasswordConfirmInput.value;

    // Checks to see if email inputs match
    if (password !== passwordConfirm) {
        alert('Your passwords do not match.');
        return;
    }
    // checks to make sure username is not empty
    if (email.trim().length === 0) {
        alert('Please enter a valid email');
        return;
    }
    // checks that password is greater than 6 characters
    if (password.trim().length < 6) {
        alert('Please enter a valid password. Password must be 6 characters long.');
        return;
    }
    // posts the user input to the /api/signup endpoint
    try {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        await response.json();
        console.log(response);
        // change user window to the /users endpoint
        // window.location.href = '/environment';
    } catch (error) {
        alert(error);
    }
});