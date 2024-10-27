// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const router = express.Router();

// Render registration page
router.get('/register', (req, res) => {
    res.render('register');
});

// Handle registration
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        res.redirect('/login');
    });
});

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send('User  not found');
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            req.session.userId = user.id;
            res.redirect('/welcome');
        } else {
            res .status(401).send('Password not match');
        }
    });
});

// Render welcome page
router.get('/welcome', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).send('Unauthorized');
    }

    db.query('SELECT COUNT(*) as count FROM users', (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching user count');
        }
        const userCount = results[0].count;
        db.query('SELECT * FROM users WHERE id = ?', [req.session.userId], (err, results) => {
            if (err) {
                return res.status(500).send('Error fetching user data');
            }
            const userData = results[0];
            res.render('welcome', { userCount, userData });
        });
    });
});

// Handle logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/login'); // Redirect to login page after logout
    });
});

module.exports = router;