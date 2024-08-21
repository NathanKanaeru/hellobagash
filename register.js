import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

 // config
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

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Fungsi Registrasi
document.getElementById('register-button').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Buat pengguna baru
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Simpan data pengguna ke Realtime Database
            set(ref(database, 'users/' + user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            });
                // Arahkan ke halaman login setelah beberapa detik
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
        })
        .catch((error) => {
            alert(error.message);
        });
});
document.getElementById('google-login').addEventListener('click', function() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const additionalUserInfo = result.additionalUserInfo;

            // Simpan data pengguna ke Realtime Database jika pengguna baru
            if (additionalUserInfo.isNewUser) {
                set(ref(database, 'users/' + user.uid), {
                    firstName: user.displayName.split(' ')[0],
                    lastName: user.displayName.split(' ').slice(1).join(' '),
                    email: user.email
                });
            }

            alert('Logged in with Google!');
            // Redirect ke halaman lain, seperti halaman dashboard
            window.location.href = "tools.html"; 
        })
        .catch((error) => {
            alert(error.message);
        });
});
