# 🚀 Login and Registration System

This project implements a complete login and registration functionality using MySQL, MongoDB, and Bootstrap. It provides a user-friendly interface and secure handling of user data.

## 📚 Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## 🛠 Technologies Used

- **Frontend**: 
  - 🌐 **Bootstrap**: For responsive design and UI components
- **Backend**: 
  - 🟢 **Node.js**: Server-side JavaScript runtime
  - 🛡️ **Express.js**: Web framework for Node.js
- **Database**:
  - 🗄️ **MySQL**: For relational data storage (user credentials)
  - 📊 **MongoDB**: For non-relational data storage (user profiles, etc.)

## ✨ Features

- ✅ **User  Registration**
  - Secure registration with input validation
  - Password hashing for security
- 🔑 **User  Login**
  - Secure login with session management
  - Error handling for incorrect credentials
- 👤 **User  Profile Management**
  - View and update user profile information
- 📱 **Responsive Design**
  - Mobile-friendly interface using Bootstrap
- 📡 **API Endpoints for User Operations**
  - Register, login, and manage user profiles

## ⚙️ Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   bash
   git clone https://github.com/kapilinania/node_login_register.github.io.git
   cd node_login_register

  #### Install Dependencies:
  Make sure you have Node.js and npm installed. Then run:npm install

  Set Up Databases:

  ## MySQL:
  
  Create a database named user_db.
  Create a table for users with appropriate fields (e.g., id, username, password, etc.).
  MongoDB:
  
  ### Create a database named user_profiles.
  Set up collections as needed for user profile data.
  Configuration:
  
  Create a .env file in the root directory and add your database connection strings

  ### Run the Application:

  Start the server:npm start
 ## 💻 Usage
  Open your web browser and navigate to http://localhost:3000.
  You will see the login and registration forms.
  Register a new user and then log in with the credentials you just created.
  Manage your profile after logging in.
  
##  📑 API Endpoints
  POST /api/register: Register a new user.
  POST /api/login: Log in an existing user.
  GET /api/profile: Get user profile information.
  PUT /api/profile: Update user profile information.
  
## 🤝 Contributing
  Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

  
