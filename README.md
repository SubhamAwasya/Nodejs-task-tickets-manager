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

## API Endpoints

### Auth routes

| **Method** | **Endpoint**         | **Description**      | **additional**                        |
| ---------- | -------------------- | -------------------- | ------------------------------------- |
| POST       | /auth/register       | Register a new user  |
| POST       | /auth/login          | Login and get JWT    |
| POST       | /auth/register/agent | Register a new agent | # new route not mentioned in the task |

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

## Testing

Use tools like:
• Postman
• Insomnia
