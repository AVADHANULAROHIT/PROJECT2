// script.js
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your login verification logic here
    // For simplicity, let's navigate to the sample login page if the username and password are both "admin"
    if (username === "admin" && password === "admin") {
        alert('Login Successful');
        window.location.href = 'login.html'; // Replace with your actual login page
    } else {
        alert('Login Failed');
    }
}

function signup() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var reenterPassword = document.getElementById('confirm-password').value;
    var dob = document.getElementById('dob').value;

    // Add your signup verification logic here
    // For simplicity, let's display a success message if passwords match
    if (newPassword === reenterPassword) {
        alert('Account created successfully');
          window.location.href = 'signup.html'; 
    } else {
        alert('Passwords do not match');
    }
}
