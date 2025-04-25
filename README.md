## Node.js Ticket Manager

A backend project to manage support tickets with role-based access control using Node.js, Express, MongoDB, and JWT.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/SubhamAwasya/Nodejs-task-tickets-manager.git

cd Nodejs-task-tickets-manager
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

## Testing

Use tools like:
• Postman
• Insomnia

## API Endpoints

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

See [API Documentation](./API%20documentation.md) for full details
