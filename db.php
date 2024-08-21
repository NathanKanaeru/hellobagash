<?php
$servername = "127.0.0.1";
$username = "root"; // default username untuk phpMyAdmin
$password = "bgsgtgbgt"; // default password untuk phpMyAdmin
$dbname = "bagasdb";

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
