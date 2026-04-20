document.getElementById("loginBox").style.display = "none";const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);alert("Script running");function login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      document.getElementById("user").innerText =
        "Welcome " + result.user.displayName;
    })
    .catch((error) => {
      console.error(error);
    });
}

function logout() {
  auth.signOut();
  document.getElementById("user").innerText = "";
}let isLoggingIn = true;

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
            window.location.href = "dashboard.html";

        } else {
            alert("Account not found or wrong password.");
        }window.location.href = "dashboard.html";

    } else {
        // Save user to browser memory
        localStorage.setItem(email, pass);
        const firebaseConfig = {
  apiKey: "AIzaSyAdSDs1QtO2lai8DzA4JxvKg7Nf1lDk5EI",
  authDomain: "studycoin-stc.firebaseapp.com",
  databaseURL: "https://studycoin-stc-default-rtdb.firebaseio.com",
  projectId: "studycoin-stc",
  storageBucket: "studycoin-stc.firebasestorage.app",
  messagingSenderId: "840351904766",
  appId: "1:840351904766:web:7ec85a6e8d2cdfa4c246af"
};

