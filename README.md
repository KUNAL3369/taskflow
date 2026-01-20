

---

```md
# TaskFlow – Secure Task Dashboard

TaskFlow is a full-stack web application that demonstrates secure authentication and a protected dashboard for managing tasks.  
The project focuses on clean UI, proper frontend–backend integration, and real-world security practices using JWT.


## Features

- User registration and login
- JWT-based authentication
- Protected dashboard routes
- Create, view, and delete tasks
- Responsive and modern UI
- Secure backend with hashed passwords


## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS (custom, responsive UI)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt for password hashing



## Project Structure

frontend/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── main.jsx

backend/
├── routes/
├── models/
├── middleware/
├── server.js
└── .env (not committed)




## API Endpoints

### Authentication
- **POST** `/api/auth/register`  
  Register a new user

- **POST** `/api/auth/login`  
  Login user and receive JWT token

### Tasks (Protected Routes)
- **POST** `/api/tasks`  
  Create a new task (JWT required)

- **GET** `/api/tasks`  
  Fetch all tasks for the logged-in user

- **DELETE** `/api/tasks/:id`  
  Delete a task by ID (JWT required)

### Authentication Method
JWT token must be sent in request headers:

```

Authorization: <JWT_TOKEN>

````


## Getting Started

### Backend Setup


cd backend
npm install
npm run dev
````

Expected logs:

* MongoDB connected
* Server running on port 5000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Security Practices

* Passwords are hashed using bcrypt before storing
* JWT tokens are verified on protected routes
* Unauthorized users are redirected to login
* Sensitive environment variables are kept in `.env`

---

## Scalability Notes

* Frontend and backend are separated for independent scaling
* RESTful APIs allow easy extension
* Can be scaled further with:

  * Pagination for tasks
  * Role-based access
  * Refresh tokens
  * Rate limiting

---

## API Proof & Logs

* API request screenshots are included in the `api-proof/` folder
* Backend startup logs are provided as screenshots/log files

---

## Author

**Kunal Prabhakar**

---
