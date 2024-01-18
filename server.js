const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const port = 3000;

const adapter = new FileSync('db.json'); // Create or use an existing JSON file as your database
const db = low(adapter);

// Set up the initial structure of the database
db.defaults({ users: [] }).write();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = db.get('users').find({ username, password }).value();

    if (user) {
        res.status(200).send('Login Successful');
    } else {
        res.status(401).send('Login Failed');
    }
});

app.post('/signup', (req, res) => {
    const { newUsername, newPassword, reenterPassword, dob } = req.body;

    if (newPassword === reenterPassword) {
        const existingUser = db.get('users').find({ username: newUsername }).value();

        if (existingUser) {
            res.status(400).send('Username already exists');
        } else {
            db.get('users')
                .push({
                    username: newUsername,
                    password: newPassword,
                    dob: dob
                })
                .write();

            res.status(200).send('Account created successfully');
        }
    } else {
        res.status(400).send('Passwords do not match');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
