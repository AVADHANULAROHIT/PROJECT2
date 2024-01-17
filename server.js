const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change the port if needed

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Sample in-memory database for user data
const users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace with your actual login logic
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).send('Login Successful');
    } else {
        res.status(401).send('Login Failed');
    }
});

app.post('/signup', (req, res) => {
    const { newUsername, newPassword, reenterPassword, dob } = req.body;

    // Replace with your actual signup logic
    if (newPassword === reenterPassword) {
        users.push({
            username: newUsername,
            password: newPassword,
            dob: dob
        });
        res.status(200).send('Account created successfully');
    } else {
        res.status(400).send('Passwords do not match');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
