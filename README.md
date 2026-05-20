# Full Stack Portfolio

This repository now includes both a React frontend and an Express backend with MongoDB.

## Project Structure

- `src/` — React frontend application
- `backend/` — Express API and MongoDB integration
- `backend/models/` — Mongoose models for project data
- `backend/routes/` — API route handlers

## Local Setup

### 1. Install dependencies

From the project root:

```bash
npm install
cd backend
npm install
```

### 2. Configure the backend

Create a `.env` file inside `backend/` using `.env.example` as a template.

```bash
cd backend
copy .env.example .env
```

Update `MONGODB_URI` with your MongoDB connection string.

### 3. Seed the database

```bash
cd backend
npm run seed
```

### 4. Run the app

Open two terminals:

Terminal 1 (frontend):

```bash
npm start
```

Terminal 2 (backend):

```bash
cd backend
npm run dev
```

The frontend runs on `http://localhost:3000` and automatically proxies API requests to `http://localhost:5000`.

## API Endpoints

- `GET /api/projects` — returns portfolio projects from MongoDB
- `GET /api/skills` — returns skill metadata
- `GET /api/contact` — returns contact details

## Deployment Notes

### Frontend

The React app can be deployed to Vercel, Netlify, or any static hosting provider.

### Backend

The Express app can be deployed to Heroku, Render, or Railway. Make sure to set `MONGODB_URI` and `CORS_ORIGIN` in the hosting environment.

### Full Stack Deployment

For a live portfolio, deploy the backend to a Node hosting service and point the frontend API requests to the hosted backend URL.

## Learn More

- React: https://reactjs.org/
- Express: https://expressjs.com/
- MongoDB: https://www.mongodb.com/
- Heroku: https://www.heroku.com/
- Vercel: https://vercel.com/
