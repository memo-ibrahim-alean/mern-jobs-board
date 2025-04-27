# React Jobs Board
A full-stack job board application built as part of a React learning journey. This project allows users to browse, add, edit, and delete job listings. The frontend is built with React and hosted locally, while the backend API is developed with Express and MongoDB.

## Project Overview
This application is a simple job board where users can:

* View a list of job listings with details like title, type, location, salary, and company information.
* Add new job listings through a user-friendly form.
* Edit or delete existing job listings.
* Enjoy a responsive design powered by Tailwind CSS.

The project demonstrates a full-stack workflow, including frontend-backend communication, CRUD operations, and responsive design.

## Features

* Browse Jobs: View all available job listings with key details.
* Add Jobs: Submit new job listings with details like title, description, salary, and company info.
* Edit Jobs: Update existing job listings.
* Delete Jobs: Remove job listings with a confirmation prompt.
* Responsive Design: Works seamlessly on both desktop and mobile devices.
* Loading State: Displays a loading message while fetching data from the backend.
* Toast Notifications: Shows success/error messages for user actions using React Toastify.

## Tech Stack

Frontend:
  * React (with Vite for fast development)
  * Tailwind CSS (for styling)
  * React Router (for navigation)
  * React Toastify (for notifications)


Backend:
* Express (Node.js framework)
* MongoDB (database)
* Mongoose (MongoDB ORM)


### Tools:
* Git (version control)
* Vite (build tool)



## Installation and Setup
Follow these steps to run the project locally on your machine.

Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)

### Setup demo video

part 1:
https://github.com/user-attachments/assets/15f7c412-4191-4c61-83d5-0e13a9be2d76

part 2: 
https://github.com/user-attachments/assets/8e15dd53-55f7-42f3-b2a9-72de00d44fce

#### The backend will run on `http://localhost:5000`

## API Endpoints
The backend provides the following endpoints for CRUD operations on job listings:

* `GET /jobs` Fetch all job listings.Response: Array of job objects.

* `GET /jobs/:id` Fetch a single job by ID.Response: Job object or 404 if not found.

* `POST /jobs` Create a new job listing.Body: JSON object with job details (title, type, description, etc.).Response: Created job object.

* `PUT /jobs/:id` Update an existing job listing.Body: JSON object with updated job details.Response: Updated job object.

* `DELETE /jobs/:id` Delete a job listing by ID.Response: Success message or 404 if not found.



