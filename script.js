// script.js
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Replace with your actual API endpoint
        const response = await fetch('https://your-api.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            message.innerText = "Login successful! Redirecting...";
            // window.location.href = "/dashboard"; 
        } else {
            message.innerText = "Error: " + data.error;
        }
    } catch (err) {
        message.innerText = "Connection failed. Please try again later.";
    }
});

