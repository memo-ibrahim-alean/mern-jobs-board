# React Jobs Board

A full-stack job board application built as part of a React learning journey. This project allows users to browse, add, edit, and delete job listings. The frontend is built with React and hosted locally, while the backend API is developed with Express and MongoDB.

## Project Overview

This application is a simple job board where users can:

- View a list of job listings with details like title, type, location, salary, and company information.
- Add new job listings through a user-friendly form.
- Edit or delete existing job listings.
- Enjoy a responsive design powered by Tailwind CSS.

The project demonstrates a full-stack workflow, including frontend-backend communication, CRUD operations, and responsive design.

## Features

- Browse Jobs: View all available job listings with key details.
- Add Jobs: Submit new job listings with details like title, description, salary, and company info.
- Edit Jobs: Update existing job listings.
- Delete Jobs: Remove job listings with a confirmation prompt.
- Responsive Design: Works seamlessly on both desktop and mobile devices.
- Loading State: Displays a loading message while fetching data from the backend.
- Toast Notifications: Shows success/error messages for user actions using React Toastify.

## Tech Stack

Frontend:

- React (with Vite for fast development)
- Tailwind CSS (for styling)
- React Router (for navigation)
- React Toastify (for notifications)

Backend:

- Express (Node.js framework)
- MongoDB (database)
- Mongoose (MongoDB ORM)

### Tools:

- Git (version control)
- Vite (build tool)

Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)

- ### Setup

1. Navigate to the client directory

2. Install dependencies: `npm install`

3. Navigate to the server directory

4. Install dependencies: `npm install`

5. Navigate to the root directory

6. Install dependencies: `npm install`

7. Start the frontend and backend using: `npm run dev `

8. Open `http://localhost:5173` in your browser to view the app.

note : The backend will run on `http://localhost:5000`

### demo video

part 1:
https://github.com/user-attachments/assets/b724d055-8b2c-4417-a2e1-cca032759662

part 2:
https://github.com/user-attachments/assets/81fdfa95-940e-43cd-aefa-6f0b19ea02c3

part 3:
https://github.com/user-attachments/assets/93a3d050-89de-493b-9cce-2faa63c0ab55

## API Endpoints

The backend provides the following endpoints for CRUD operations on job listings:

- `GET /jobs` Fetch all job listings.Response: Array of job objects.

- `GET /jobs/:id` Fetch a single job by ID.Response: Job object or 404 if not found.

- `POST /jobs` Create a new job listing.Body: JSON object with job details (title, type, description, etc.).Response: Created job object.

- `PUT /jobs/:id` Update an existing job listing.Body: JSON object with updated job details.Response: Updated job object.

- `DELETE /jobs/:id` Delete a job listing by ID.Response: Success message or 404 if not found.
