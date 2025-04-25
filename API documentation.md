# I’ve added a `postman_routes_collections.json` file to help you easily test all API routes. Just import it into Postman to get started.

# API Documentation

## Authentication

### POST `/auth/register`

Registers a new user.

**Request Body:**

```json
{
  "name": "your name",
  "email": "youremail@example.com",
  "password": "password123",
  "role": "agent" || "user"  // Optional: defaults to "user"
}
```

**Notes:**

- Default role during registration is user
- To make someone an agent, manually update their role in the database or add role when registering new user ( **not secure** )

**Responses:**

- `201 Created`: User registered successfully
- `400 Bad Request`: User already exists

---

### POST `/auth/login`

Logs in a user and returns a JWT token.

**Request Body:**

```json
{
  "email": "youremail@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "user": {
    "id": "_id_",
    "name": "_name_",
    "role": "_role_"
  },
  "token": "your_jwt_token"
}
```

**Responses:**

- `200 OK`: Login successful
- `400 Bad Request`: Invalid credentials

---

## Tickets

> All routes below require `Authorization: Bearer <token>` in headers

---

### POST `/tickets`

Create a new ticket.

**Request Body:**

```json
{
  "title": "Issue title",
  "description": "Detailed issue description"
}
```

**Responses:**

- `201 Created`: Ticket created successfully
- `401 Unauthorized`: Missing or invalid token

---

### GET `/tickets`

Retrieve all tickets (Agent only).

**Responses:**

- `200 OK`: List of all tickets
- `403 Forbidden`: Only agents allowed

---

### GET `/tickets/my`

Get tickets created by the logged-in user.

**Responses:**

- `200 OK`: List of user's own tickets

---

### GET `/tickets/:id`

Retrieve a single ticket by ID.

**Access:** Ticket owner or agent only.

**Responses:**

- `200 OK`: Ticket details
- `403 Forbidden`: Not authorized
- `404 Not Found`: Ticket not found

---

### PUT `/tickets/:id`

Update a ticket by ID.

**Access:** Ticket owner or agent only.

**Request Body (partial or full update):**

```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "closed"
}
```

**Responses:**

- `200 OK`: Ticket updated
- `403 Forbidden`: Not authorized

---

### DELETE `/tickets/:id`

Delete a ticket by ID.

**Access:** Ticket owner or agent only.

**Responses:**

- `200 OK`: Ticket deleted
- `403 Forbidden`: Not authorized

---
