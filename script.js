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

// Import Firebase functions from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your configuration from the screenshot
const firebaseConfig = {
  apiKey: "AIzaSyADsDs1QtO2lai8DzA4JxvKg7Nf1lDk5E",
  authDomain: "studycoin-stc.firebaseapp.com",
  databaseURL: "https://studycoin-stc-default-rtdb.firebaseio.com",
  projectId: "studycoin-stc",
  storageBucket: "studycoin-stc.firebasestorage.app",
  messagingSenderId: "840351904766",
  appId: "1:840351904766:web:7ec85a6e8d2cdfa4c246af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example Login Function
window.handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Success!", userCredential.user);
            alert("Login Successful!");
        })
        .catch((error) => {
            console.error("Login Error:", error.message);
            alert("Error: " + error.message);
        });
};
