# Copilot Instructions for express-ts

## Project Overview
This project is a minimal Express.js backend written in TypeScript. It is structured for clarity and maintainability, with a focus on a simple task management domain model.

## Key Files & Structure
- `src/server.ts`: Entry point. Sets up and starts the Express server.
- `src/models/Task.ts`: Contains the `Task` class and related logic for in-memory task management.
- `package.json`: Scripts and dependencies.
- `tsconfig.json`: TypeScript configuration (uses `nodenext` modules, strict mode, outputs to `build/`).

## Developer Workflows
- **Development:**
  - Run the server in watch mode: `npm run dev` (uses `tsx` for live reload)
- **Build:**
  - Compile TypeScript: `npm run build` (outputs to `build/`)
- **Production:**
  - Start compiled server: `npm start`

## Patterns & Conventions
- **TypeScript:**
  - Uses strict typing and modern ES module imports (`import express from 'express'`).
  - All business logic for tasks is encapsulated in the `Task` class (no external DB, in-memory only).
- **Task Model:**
  - `Task` class manages its own static list and sequence for IDs.
  - CRUD operations are static methods: `findAll`, `findById`, `create`, `update`.
  - Example usage:
    ```ts
    Task.create({ title, description, status, priority })
    Task.findAll()
    Task.update(id, { status: 'completed' })
    ```
- **No Routing Layer Yet:**
  - All logic is in models and server entry; no controllers or routers are present by default.

## External Dependencies
- `express` (runtime)
- `tsx`, `typescript`, `@types/express`, `@types/node` (dev)

## Extending the Project
- Add new models to `src/models/`.
- Add routes/controllers by creating new files in `src/` and importing them in `server.ts`.
- Follow the in-memory pattern for new domain logic unless introducing a database.

## Example: Adding a Route
```ts
// In server.ts
import express from 'express';
import { Task } from './models/Task';
const app = express();
app.get('/tasks', (req, res) => res.json(Task.findAll()));
```

---
If you add new conventions or workflows, update this file to help future AI agents and developers.
