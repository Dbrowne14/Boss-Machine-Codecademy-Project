# Boss Machine API

## Project Overview
**Boss Machine** is a full-featured management API built to demonstrate my skills in modern web development with Node.js and Express. The API allows users to manage teams, track project ideas, and organize meetings efficiently through a clean, structured RESTful interface.

This project highlights my ability to design and implement backend systems, handle dynamic data, and apply middleware for business logic, creating a foundation that could easily integrate with a frontend application built in React or another framework.

---

## API Endpoints

The API provides routes to manage three core resources: **minions**, **ideas**, and **meetings**.

### Minions
- `GET /api/minions` – Retrieve all minions  
- `POST /api/minions` – Add a new minion  
- `GET /api/minions/:minionId` – Get a specific minion  
- `PUT /api/minions/:minionId` – Update a minion  
- `DELETE /api/minions/:minionId` – Remove a minion  

### Ideas
- `GET /api/ideas` – Retrieve all ideas  
- `POST /api/ideas` – Add a new idea  
- `GET /api/ideas/:ideaId` – Get a specific idea  
- `PUT /api/ideas/:ideaId` – Update an idea  
- `DELETE /api/ideas/:ideaId` – Remove an idea  

### Meetings
- `GET /api/meetings` – Retrieve all meetings  
- `POST /api/meetings` – Generate a new meeting automatically  
- `DELETE /api/meetings` – Remove all meetings  

> POST and PUT requests send new or updated data in the request body. Meetings are generated programmatically by the server.

---

## Database
The API uses a simple in-memory database (`server/db.js`) for demonstration purposes. Helper functions handle all data operations:

- `getAllFromDatabase(modelName)`  
- `getFromDatabaseById(modelName, id)`  
- `addToDatabase(modelName, object)`  
- `updateInstanceInDatabase(modelName, object)`  
- `deleteFromDatabasebyId(modelName, id)`  
- `deleteAllFromDatabase(modelName)`  

This setup allows focus on **Express routing** and middleware without needing persistent storage.

---

## Custom Middleware
The `checkMillionDollarIdea.js` middleware ensures that ideas added or updated via the API meet a minimum revenue threshold, demonstrating validation and business logic implementation in the backend.

---

## Testing
Automated tests are included using Mocha. They cover all API endpoints, middleware, and edge cases to ensure reliability and correct functionality.

---

## Tech Stack
- **Node.js**  
- **Express.js**  
- **RESTful API Design**  
- **Custom Middleware & Validation**  
- **In-memory Database Simulation**  

---

## Key Learnings
- Designing and implementing a RESTful API from scratch  
- Building dynamic routes for multiple resource types  
- Applying middleware to enforce business rules  
- Structuring backend code for readability and scalability
