const signinBtn = document.getElementById('signinBtn');
const signInEmailInput = document.getElementById('signInEmailInput');
const signInPasswordInput = document.getElementById('signInPasswordInput');

signinBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = signInEmailInput.value;
    const password = signInPasswordInput.value;

        // checks to make sure username is not empty
    if (email.trim().length === 0) {
        alert('Please enter a valid email');
        return;
    }
         // checks that password is greater than 6 characters
    if (password.trim().length < 6) {
        alert('Please enter a valid password.');
        return;
    }
        try {
        const response = await fetch('/api/user/signin', {
            method: 'GET',
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
});