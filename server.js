// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (users.some(u => u.username === username)) {
        res.status(400).json({ message: 'Username already exists' });
    } else {
        users.push({ username, password });
        res.status(201).json({ message: 'Signup successful' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
