# 🎟️ Ticket Management System API

A RESTful API built with Node.js, Express, and MongoDB for managing support tickets with role-based access.

---

## 🔧 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- dotenv for environment variables
- ES6 Modules

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git https://github.com/SubhamAwasya/Nodejs-task-tickets-manager.git

cd nodejs-task-tickets-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

## 📮 API Endpoints

### Auth routes

| **Method** | **Endpoint**   | **Description**     |
| ---------- | -------------- | ------------------- |
| POST       | /auth/register | Register a new user |
| POST       | /auth/login    | Login and get JWT   |

### Tickets routes

| **Method** | **Endpoint** | **Access**  | **Description**                       |
| ---------- | ------------ | ----------- | ------------------------------------- |
| POST       | /tickets     | Auth        | Create a new ticket                   |
| GET        | /tickets     | Agent       | Get all tickets                       |
| GET        | /tickets/my  | Auth        | Get tickets created by logged-in user |
| GET        | /tickets/:id | Owner/Agent | Get ticket by ID                      |
| PUT        | /tickets/:id | Owner/Agent | Update ticket                         |
| DELETE     | /tickets/:id | Owner/Agent | Delete ticket                         |

---

## 🧪 Testing

Use tools like:
• Postman
• Insomnia

### Add Authorization header:

```
authorization : "Bearer <your_token>"
```

## 📌 Notes

- Default role during registration is user
- To make someone an agent, manually update their role in the database or add role when registering new user
