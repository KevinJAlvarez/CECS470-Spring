document.addEventListener('DOMContentLoaded', async () => {
    const loginBtn = document.getElementById('login-btn');
    const loggedOutView = document.getElementById('logged-out-view');
    const loggedInView = document.getElementById('logged-in-view');
    const errorMsg = document.getElementById('error-msg');


    const updateUI = (isLoggedIn) => {
        if (isLoggedIn) {
            loggedOutView.style.display = 'none';
            loggedInView.style.display = 'block';
        } else {
            loggedOutView.style.display = 'block';
            loggedInView.style.display = 'none';
        }
    };

    //already logged?
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        updateUI(true);
    }

    //handle login click
    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: user, password: pass })
            });

            if (response.ok) {
                sessionStorage.setItem('isLoggedIn', 'true');
                updateUI(true);
            } else {
                errorMsg.innerText = "Wrong username or password";
                errorMsg.style.display = 'block';
            }
        });
    }
});