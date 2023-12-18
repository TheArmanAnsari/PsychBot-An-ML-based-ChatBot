<?php
// validate.php

// Simulating database connection (replace with your actual database connection)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "psychbot_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Basic SQL injection prevention (you should use prepared statements for better security)
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Simulate database validation (replace with your actual validation logic)
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array('isValid' => true);
} else {
    $response = array('isValid' => false);
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
