# Task Management API

A REST API for managing users, projects, and tasks built with Node.js, Express, and Prisma ORM.

## Project Scope

This API provides comprehensive task management functionality with the following features:

### Database Schema
- **Users**: User registration and management with email/username authentication
- **Projects**: Project creation and ownership management
- **Tasks**: Task creation with status tracking, assignments, and due dates
- **Relationships**: Many-to-many relationships between users-projects and users-tasks

### API Endpoints

#### Users (`/users`)
- Create new users with email, username, and password
- Retrieve user information

#### Projects (`/projects`) 
- Create projects with ownership
- Associate users as project members
- Retrieve project details

#### Tasks (`/tasks`)
- Create tasks with title, description, status, and due dates
- Assign tasks to multiple users
- Track task status (TODO, IN_PROGRESS, DONE)
- Associate tasks with projects

### Technology Stack
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Features**: CORS enabled, JSON middleware, modular routing

### Current Status
-  Database schema defined with Prisma
-  Basic CRUD operations for users, projects, and tasks
-  RESTful API structure with modular controllers and routes
-   Password hashing not yet implemented (stored as plain text)
- = Authentication/authorization system pending

## Getting Started

1. Install dependencies: `npm install`
2. Set up your PostgreSQL database
3. Configure your `DATABASE_URL` in `.env`
4. Run Prisma migrations: `npx prisma migrate dev`
5. Start the server: `node src/index.js`

The API will be available at `http://localhost:3000`