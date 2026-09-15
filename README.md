# AutenticationSystem

Full-stack authentication system built with React, TypeScript, Node.js, and Express.

The project implements user registration, login, route authentication, session management using HTTP-only cookies, and logout.

## Technologies

### Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS

### Backend

* Node.js
* Express
* MySQL
* JWT
* bcrypt
* cookie-parser
* CORS
* dotenv

## Structure

```text
AutenticationSystem/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env.example
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── apps/
    │   ├── service/
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

The frontend handles the user interface and API requests. The backend processes requests, handles authentication, and communicates with the database.

## Features

* User registration
* Password hashing with bcrypt
* Login
* JWT authentication
* Session management using HTTP-only cookies
* Protected dashboard
* Logout
* Protected routes

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MySQL
* Git

### 1. Clone the project

```bash
git clone https://github.com/KlebersonDuarte/AutenticationSystem.git

cd AutenticationSystem
```

### 2. Set up the database

The project uses MySQL.

Create the database:

```sql
CREATE DATABASE AuthenticationSystem;
```

Then create the table:

```sql
USE AuthenticationSystem;

CREATE TABLE users (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(120) NOT NULL,
    email_usuario VARCHAR(255) NOT NULL UNIQUE,
    senha_usuario VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure environment variables

Go to the backend folder:

```bash
cd backend
```

Copy the example environment file:

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**Linux/macOS:**

```bash
cp .env.example .env
```

Then open the `.env` file and fill in your environment-specific values.

The `.env.example` file is only a template and can be committed to the repository. The `.env` file contains private information and should not be committed to Git.

### 4. Install dependencies

In the backend:

```bash
cd backend

npm install
```

In another terminal, go to the frontend:

```bash
cd frontend

npm install
```

### 5. Start the backend

From the `backend` folder:

```bash
npm start
```

The server will start on the port configured in the `.env` file.

### 6. Start the frontend

From the `frontend` folder:

```bash
npm run dev
```

Vite will display the address where the application can be accessed, usually:

```text
http://localhost:5173
```

## API

| Method | Route        | Description                     |
| ------ | ------------ | ------------------------------- |
| POST   | `/register`  | Creates a user                  |
| POST   | `/login`     | Logs in a user                  |
| GET    | `/dashboard` | Returns authenticated user data |
| POST   | `/logout`    | Ends the current session        |

## Authentication

The authentication flow works as follows:

```text
React
  │
  │ HTTP
  ▼
Express
  │
  ├── Authentication
  ├── JWT
  └── MySQL
  │
  ▼
HTTP Response
  │
  ▼
React
```

After a successful login, the backend generates a JWT and sends it through an HTTP-only cookie. On subsequent protected requests, the browser sends the cookie and the backend validates the token before granting access.

## Status

Project under development, created to practice full-stack development, authentication, REST APIs, and database integration.