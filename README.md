# 23dcs048_Internal

A MERN stack project with separate frontend (Vite + React) and backend (Node.js + Express + MongoDB).  


## 📂 Project Setup  

### 🔧 Backend Setup  
1. Navigate to the backend folder:  
   cd backend
2 .Install dependencies:
  npm install

  Create a .env file in the backend folder and add the following:

  MONGO_URI="mongodb://localhost:27017/internal"
  JWT_SECRET=supersecret_jwt_key_is_-_this
  JWT_EXPIRES_IN=1d
  CLIENT_URL=http://localhost:5173



  Start the development server:
  npm run dev




###🎨 Frontend Setup
  Navigate to the frontend folder:
  cd frontend
  Install dependencies:
  npm install



  Create a .env file in the frontend folder and add the following:
  VITE_BACKEND=http://localhost:5000

  Start the development server:
  npm run dev


###🚀 Available Scripts
  Backend
  npm run dev → Runs the backend in development mode with nodemon
  Frontend
  npm run dev → Runs the frontend React app using Vite

###🌐 URLs
  Backend → http://localhost:5000

  Frontend → http://localhost:5173



###⚡ Tech Stack
  Frontend: React, Vite
  Backend: Node.js, Express 
  Database: MongoDB

  Authentication: JWT



