## Project_Management_System
#### A RESTful backend API built using **Node.js, Express.js, MongoDB, and JWT Authentication**. This project implements **Role-Based Access Control (RBAC)** with Access Tokens and Refresh Tokens to manage users and projects securely.

## Features

### Authentication
- User Signup
- User Login
- JWT Access Token Authentication
- Refresh Token Mechanism
- Logout Functionality

### Role-Based Access Control
Three roles are supported:

- USER
- MANAGER
- ADMIN

### User Features
- View own profile
- Update own profile
- View all users (Admin only)
- Change user roles (Admin only)

### Project Features
- Create project (Manager/Admin)
- View projects (All authenticated users)
- Update own project (Owner Manager/Admin)
- Delete project (Admin only)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv

## Folder Structure

project-management-api
│
├── src
│   ├── configs
│   │      db.js
│   │
│   ├── controllers
│   │      authController.js
│   │      userController.js
│   │      projectController.js
│   │
│   ├── middlewares
│   │      authMiddleware.js
│   │      roleMiddleware.js
│   │
│   ├── models
│   │      userModel.js
│   │      projectModel.js
│   │
│   ├── routes
│   │      authRoutes.js
│   │      userRoutes.js
│   │      projectRoutes.js
│   │
│   ├── utils
│   │      generateTokens.js
│   │
│   └── index.js
│
├── .env
├── package.json
└── README.md

# Installation

Clone the repository:
git clone (https://github.com/hinehasahu/Project_Management_System.git)


Move to the project directory:
cd Project-Management-System


Install dependencies:
npm install


Start the server:
npm start

# Environment Variables

Create a `.env` file in the root directory.

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=secret_key

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

# API Endpoints

## Authentication Routes

### Register User

POST /users/register

### Login User

POST /users/login

### Logout

POST /users/logout

## User Routes

### Get Own Profile

GET /users/

### Update Own Profile

PUT /users/:id

### Get All Users (Admin Only)

GET /users

### Update User Role (Admin Only)

PATCH /users/:id/role

## Project Routes

### Get All Projects

GET /projects

Accessible by:

- USER
- MANAGER
- ADMIN

### Create Project

POST /projects/create

Accessible by:

- MANAGER
- ADMIN

### Update Project

PUT /projects/:id

Accessible by:

- Owner Manager
- Admin

### Delete Project

DELETE /projects/:id

Accessible by:

- ADMIN

# Authentication Flow

1. User logs in using email and password.
2. Server generates:
   - Access Token (15 minutes)
   - Refresh Token (7 days)
3. Access Token is used to access protected routes.
4. When the Access Token expires, a new one can be generated using the Refresh Token.
5. User can logout to invalidate the Refresh Token.

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

# Author

**Neha Sahu**

Backend Developer | MERN Stack Developer
