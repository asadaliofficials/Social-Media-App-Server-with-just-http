# Social App Backend (Local File DB)

## Description

A simple and modular backend for a social app, built with Node.js.  
This project uses a local file-based database to manage users, posts, and interactions.  
It is designed for learning backend fundamentals, RESTful API design, and file-based data storage.  
The codebase is organized with controllers, routes, and middleware for clarity and scalability.

## Features

- User registration and authentication
- Create, read, update, and delete posts
- Like and comment on posts
- Protected routes for authenticated users
- Modular structure for easy maintenance

## API Endpoints

| Method | Endpoint         | Description                     | Protected |
| ------ | ---------------- | ------------------------------- | --------- |
| POST   | `/api/register`  | Register a new user             | No        |
| POST   | `/api/login`     | User login and token generation | No        |
| GET    | `/api/posts`     | Get all posts                   | No        |
| POST   | `/api/posts`     | Create a new post               | Yes       |
| PUT    | `/api/posts/:id` | Update a post                   | Yes       |
| DELETE | `/api/posts/:id` | Delete a post                   | Yes       |

> **Note:** Protected endpoints require authentication via a token.

## How to Run

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd <project-directory>
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute as needed.
