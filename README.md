# Blogging Platform Backend 🚀

[![Live Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://blogging-platform-backend-sepia.vercel.app/)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A basic backend system for a modern blogging platform with secure authentication, role-based access control, and CRUD operations for blog management.

## Features ✨

### Core Functionality
- **User Authentication** (JWT-based)
- **Role-Based Access Control** (Admin/User)
- **Blog Management** (CRUD operations)
- **Public API** with search, sort, and filter
- **Error Handling** with standardized responses

### User Features
- ✅ User registration & login
- ✅ Create/Update/Delete personal blogs
- ✅ View all published blogs
- 🔒 JWT-protected endpoints

### Admin Features
- 🛡️ Block/unblock users
- 🗑️ Delete any blog post
- 👮 Admin-only protected routes

## Technologies 💻

**Backend:**
- TypeScript
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)

**Key Libraries:**
- Zod (Schema validation)
- JSON Web Tokens (Authentication)
- Dotenv (Environment variables)

## Getting Started 🏁

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance
- Postman/Thunder Client for API testing

### Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/Md-Rakib-Hassan/Blogging_Platform_Backend.git
   cd Blogging_Platform_Backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create `.env` file in root directory:
   ```env
   PORT=5000
   DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/blog-platform
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=1d
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Seed Admin User**
   Manually create an admin user in MongoDB:
   ```json
   {
     "name": "Admin User",
     "email": "admin@example.com",
     "password": "admin123",
     "role": "admin",
     "isBlocked": false
   }
   ```

## API Documentation 📚

### Base URL: [https://blogging-platform-backend-sepia.vercel.app/api](https://blogging-platform-backend-sepia.vercel.app/api)

### Key Endpoints

| Method | Endpoint                  | Description                  | Auth Required |
|--------|---------------------------|------------------------------|---------------|
| POST   | `/auth/register`          | Register new user            | No            |
| POST   | `/auth/login`             | User login                   | No            |
| POST   | `/blogs`                  | Create new blog              | Yes (User)    |
| GET    | `/blogs`                  | Get all blogs (Public)       | No            |
| PATCH  | `/blogs/:id`              | Update blog                  | Yes (Owner)   |
| DELETE | `/blogs/:id`              | Delete blog                  | Yes (Owner)   |
| PATCH  | `/admin/users/:id/block`  | Block user                   | Yes (Admin)   |
| DELETE | `/admin/blogs/:id`        | Delete any blog              | Yes (Admin)   |

## Error Handling ⚠️

### Standardized error response format:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": {
    "details": "Additional error info"
  }
}
```

### Handled Error Types:
- Validation Errors (Zod/Mongoose)
- Authentication Errors
- Authorization Errors
- Database Errors
- Not Found Errors

## Deployment 🚀

This application is deployed on Vercel with MongoDB Atlas cloud database. The live API can be accessed at:
[https://blogging-platform-backend-sepia.vercel.app](https://blogging-platform-backend-sepia.vercel.app)

