// server.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET, // Use the secret from the .env file
    resave: false,
    saveUninitialized: true,
}));



// Set the view engine
app.set('view engine', 'ejs');

// Route for the index page
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

// Use the auth routes
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});