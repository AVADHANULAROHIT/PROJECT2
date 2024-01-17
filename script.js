// script.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send login request to the server (backend) and handle the response
    console.log(`Login request - Username: ${username}, Password: ${password}`);
}

function signup() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    // Send signup request to the server (backend) and handle the response
    console.log(`Signup request - Username: ${newUsername}, Password: ${newPassword}`);
}
