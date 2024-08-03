# User Management System

## Overview

The User Management System is a web application that allows users to manage their profiles, view other users, and perform basic actions. The project includes user registration, login, profile management, and a searchable user directory.

## Features

- User Registration and Login
- Profile Management
  - View and Edit Profile
- User Directory
  - Searchable list of all users
  - View other users' profiles

## Technologies Used

### Front-end
- React
- TypeScript
- Redux or Context API for state management
- TailwindCSS or Bootstrap for styling

### Back-end
- Node.js
- Express.js
- MongoDB
- TypeScript
- JWT for authentication

## API Endpoints

- `POST /register`: Register a new user
- `POST /login`: Authenticate a user
- `GET /profile`: Retrieve the authenticated user's profile
- `PUT /profile/edit`: Update the authenticated user's profile
- `GET /users`: Retrieve a list of all users
- `GET /users/:id`: Retrieve a specific user's profile

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- Git

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
