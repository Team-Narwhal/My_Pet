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
        // Replace with modal in the future.
        alert('Your passwords do not match.');
        return;
    }
    // Checks to make sure username is not empty
    if (email.trim().length === 0) {
        // Replace with modal in the future.
        alert('Please enter a valid email address.');
        return;
    }
    // Checks that password is greater than 6 characters
    if (password.trim().length < 6) {
        // Replace with modal in the future.
        alert('Please enter a valid password. Password must be at least six characters long.');
        return;
    }
    // Posts the user input to the /api/signup endpoint
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
        // Redirects users to the create_pet page.
        window.location.href = '/create_pet';
    } catch (error) {
        console.log(error);
    }
});