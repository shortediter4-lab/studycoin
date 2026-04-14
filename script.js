let isLoggingIn = true;

function toggleForm() {
    isLoggingIn = !isLoggingIn;
    // Update the UI labels
    document.querySelector('h2').innerText = isLoggingIn ? "Login to your wallet" : "Create StudyCoin Account";
    document.getElementById('main-btn').innerText = isLoggingIn ? "Sign In" : "Sign Up";
    document.getElementById('toggle-text').innerHTML = isLoggingIn 
        ? 'Don\'t have an account? <span onclick="toggleForm()" style="color:orange; cursor:pointer;">Sign Up</span>'
        : 'Already have an account? <span onclick="toggleForm()" style="color:orange; cursor:pointer;">Login</span>';
}

function handleAuth() {
    const email = document.querySelector('input[type="email"]').value;
    const pass = document.querySelector('input[type="password"]').value;

    if (!email || !pass) {
        alert("Please fill in both fields.");
        return;
    }

    if (isLoggingIn) {
        // Check if user exists in browser memory
        const savedPass = localStorage.getItem(email);
        if (savedPass === pass) {
            alert("Success! Welcome to StudyCoin.");
            // Add your dashboard link here later
        } else {
            alert("Account not found or wrong password.");
        }
    } else {
        // Save user to browser memory
        localStorage.setItem(email, pass);
        alert("Account Created! You can now log in.");
        toggleForm(); // Switch back to login mode
    }
}

