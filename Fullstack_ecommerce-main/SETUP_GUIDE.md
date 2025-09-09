# E-commerce Project Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
The dependencies have already been installed. If you need to reinstall:
```bash
# Backend dependencies
npm install

# Frontend dependencies
cd client
npm install
cd ..
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following content:
```
PORT=8000
MONGO_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
```

### 3. Database Setup
You have two options:

#### Option A: Local MongoDB
1. Download and install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. The connection string `mongodb://localhost:27017/ecommerce` will work

#### Option B: MongoDB Atlas (Cloud)
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string and replace `MONGO_URL` in `.env`
4. Example: `mongodb+srv://username:password@cluster.mongodb.net/ecommerce`

### 4. Running the Project

#### Start both frontend and backend:
```bash
npm start
```

#### Or run separately:
```bash
# Backend only
npm run server

# Frontend only (in another terminal)
npm run client
```

## Project Structure
- `server.js` - Main backend server
- `client/` - React frontend application
- `config/` - Database and other configurations
- `controllers/` - API route handlers
- `models/` - Database models
- `routes/` - API routes
- `middlewares/` - Authentication and other middleware

## Access Points
- Backend API: http://localhost:8000
- Frontend: http://localhost:5173 (Vite default port)
- API Endpoints:
  - `/api/v1/auth` - Authentication routes
  - `/api/v1/catagory` - Category management
  - `/api/v1/products` - Product management

## Troubleshooting
1. **Port already in use**: Change PORT in `.env` file
2. **MongoDB connection failed**: Check your MongoDB installation/connection string
3. **Frontend not loading**: Make sure the backend is running first
4. **CORS issues**: The backend has CORS enabled, but check if ports match

## Features
This is a full-stack e-commerce application with:
- User authentication (JWT)
- Product management
- Category management
- Modern React frontend with Tailwind CSS
- Responsive design
