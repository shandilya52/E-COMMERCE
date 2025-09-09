# Fullstack_ecommerce
# 🛍️ StyleHub - Full Stack E-commerce Application

A modern, responsive e-commerce platform built with React.js frontend and Node.js backend, featuring user authentication, product management, shopping cart functionality, and admin dashboard.

## ✨ Features

### 🎯 User Features
- **User Authentication & Authorization**
  - Secure user registration and login
  - JWT-based authentication
  - Protected routes for authenticated users
  - User profile management

- **Shopping Experience**
  - Browse all products with pagination
  - Advanced product search and filtering
  - Detailed product pages with images
  - Shopping cart functionality
  - Responsive design for all devices

- **User Dashboard**
  - Order history and tracking
  - Profile management
  - Order status updates

### 🔧 Admin Features
- **Product Management**
  - Create, read, update, and delete products
  - Category management
  - Image upload functionality
  - Inventory tracking

- **User Management**
  - View all registered users
  - User role management

- **Admin Dashboard**
  - Comprehensive analytics
  - Order management
  - Product statistics

### 🎨 Frontend Features
- **Modern UI/UX**
  - Built with React 18 and Vite
  - Tailwind CSS for styling
  - Responsive design
  - Smooth animations with GSAP
  - Loading states and error handling

- **Interactive Components**
  - Image sliders and carousels
  - Product search with real-time results
  - Pagination for large datasets
  - Toast notifications

### 🚀 Backend Features
- **RESTful API**
  - Express.js server
  - MongoDB with Mongoose ODM
  - JWT authentication
  - CORS enabled
  - File upload support

- **Security**
  - Password hashing with bcrypt
  - JWT token-based authentication
  - Input validation and sanitization

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Ant Design** - UI component library
- **Axios** - HTTP client
- **GSAP** - Animation library
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
Fullstack_ecommerce/
├── client/                     # React frontend
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── form/         # Form components
│   │   │   ├── layout/       # Layout components
│   │   │   └── Routes/       # Route protection
│   │   ├── context/          # React context providers
│   │   ├── pages/            # Page components
│   │   │   ├── admin/        # Admin pages
│   │   │   ├── Auth/         # Authentication pages
│   │   │   └── user/         # User dashboard pages
│   │   └── utils/            # Utility functions
│   ├── package.json
│   └── vite.config.js
├── config/                    # Database configuration
├── controllers/               # Route controllers
├── middlewares/              # Custom middleware
├── models/                   # Database models
├── routes/                   # API routes
├── helper/                   # Helper functions
├── server.js                 # Main server file
├── package.json              # Backend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   git clone <your-repo-url>
   cd Fullstack_ecommerce

2. **Install dependencies**
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=8000
   MONGO_URL=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. **Database Setup**
   
   **Option A: Local MongoDB**
   - Install MongoDB Community Server
   - Start MongoDB service
   - Use `mongodb://localhost:27017/ecommerce`

   **Option B: MongoDB Atlas (Recommended)**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Get connection string and update `MONGO_URL`

5. **Run the application**
   # Start both frontend and backend
   npm start
   
   # Or run separately:
   # Backend only
   npm run server
   
   # Frontend only (in another terminal)
   npm run client
   ```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000


## 🔧 Available Scripts

### Backend Scripts
```bash
npm run server    # Start backend server with nodemon
npm start         # Start both frontend and backend concurrently
```

### Frontend Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation
- Protected routes for admin functions

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Animations**: Smooth transitions with GSAP
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Comprehensive error messages
- **Toast Notifications**: Real-time feedback for user actions

## 📊 Database Schema

### User Model
- Name, email, password, phone, address
- Role-based access (user/admin)
- Timestamps for tracking

### Product Model
- Name, description, price, category
- Quantity, shipping options
- Image storage with Buffer
- Search optimization with indexes

### Category Model
- Category name and slug
- Timestamps for tracking

## 👨‍💻 Author

**SATYA RAJ**
- GitHub: [](https://github.com/shandilya52)

⭐ **Star this repository if you found it helpful!**


