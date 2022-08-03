const signinBtn = document.getElementById('signinBtn');
const signInEmailInput = document.getElementById('signInEmailInput');
const signInPasswordInput = document.getElementById('signInPasswordInput');
const signOutBtn = document.getElementById('signOutBtn');

signinBtn?.addEventListener('click', async (event) => {
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

         // change user window to the /playpen endpoint
        window.location.href = '/playpen'; 
    } catch (error) {
        console.log(error);
        alert(error);
      }
});

signOutBtn?.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('/api/user/signout', {
            method: 'POST',
        });
        await response.json();
        console.log(response);
        window.location.href = '/';
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
});

