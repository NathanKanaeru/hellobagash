// Import dan konfigurasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgYOqxP-545FDvw3FyqTdxKq8EUZz-Jw",
  authDomain: "bagasweb-fb87d.firebaseapp.com",
  projectId: "bagasweb-fb87d",
  storageBucket: "bagasweb-fb87d.appspot.com",
  messagingSenderId: "445241215198",
  appId: "1:445241215198:web:481054badff1cf5f745a4f",
  measurementId: "G-4SYFLNT77L",
  databaseURL: "https://bagasweb-fb87d-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi login
const loginButton = document.querySelector('button[type="submit"]');
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('#password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login berhasil
            window.location.href = "tools.html";  // Redirect ke tools.html
        })
        .catch((error) => {
            // Tangani error login
            alert("Login gagal: " + error.message);
        });
});


document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.textContent = '🙈';  // Mata tertutup
    } else {
        passwordInput.type = 'password';
        passwordIcon.textContent = '👁️';  // Mata terbuka
    }
});
