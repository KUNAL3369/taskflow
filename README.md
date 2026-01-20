```
# TaskFlow – Secure Task Dashboard

TaskFlow is a full-stack web application that provides secure authentication and a protected dashboard for managing tasks. The project demonstrates frontend–backend integration, JWT-based authentication, and clean UI design.

## Features
- User registration and login
- JWT-based authentication
- Protected dashboard routes
- Create, view, and delete tasks
- Responsive, modern UI
- Secure backend with password hashing

## Tech Stack
**Frontend**
- React (Vite)
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Project Structure
```

frontend/
└── src/
└── pages/
├── Login.jsx
├── Register.jsx
└── Dashboard.jsx

backend/
├── routes/
├── models/
├── middleware/
└── server.js

````

## Getting Started

### Backend
```bash
cd backend
npm install
npm run dev
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Security

- Passwords are hashed using bcrypt
- JWT tokens are validated on protected routes
- Unauthorized access redirects to login

## Scalability Notes

- Frontend and backend are separated for independent scaling
- APIs follow REST principles
- Easy to extend with pagination, roles, and refresh tokens

## Author

Kunal Prabhakar

```

```
