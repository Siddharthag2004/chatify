# Chatify

![Status](https://img.shields.io/badge/Status-Live-success)
![MERN](https://img.shields.io/badge/Stack-MERN-blue)

A production-ready real-time messaging platform built for performance and scalability. Chatify enables instant communication with secure authentication, persistent storage, and a modern responsive interface.

**Live Demo:** https://chatify-lovat.vercel.app/

---

## Tech Stack

**Frontend:**
- React
- TailwindCSS
- DaisyUI
- Zustand

**Backend:**
- Node.js
- Express

**Database:**
- MongoDB
- Mongoose

**Real-time:**
- Socket.io (WebSockets)

**Security:**
- JWT (HttpOnly Cookies)
- Arcjet
- BCrypt

---

## Key Features

- **Real-time Messaging:** Instant bi-directional communication using Socket.io
- **Secure Authentication:** Custom JWT implementation with HttpOnly cookies
- **Global State Management:** Optimized state handling with Zustand
- **Media Support:** Image uploads and storage via Cloudinary
- **Online Presence:** Accurate online/offline status indicators
- **Dynamic Theming:** 32+ theme options with persistent user preference

---

## Technical Highlights

- Handles multiple concurrent user connections with low-latency real-time communication
- Secured API endpoints against abuse using Arcjet rate-limiting and protected routes
- Split-stack deployment pipeline (Render for Backend, Vercel for Frontend)

---

## Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/Siddharthag2004/chatify-portfolio.git
```

**2. Install dependencies**
```bash
cd backend && npm install
cd ../frontend && npm install
```

**3. Setup environment variables**

Create a `.env` file in the backend folder:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

**4. Run the application**

Terminal 1 (Backend):
```bash
npm run dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

---

## Contact

**Siddhartha Gurrapu**  
2026 Batch | Software Developer / Web Developer

- **LinkedIn:** https://www.linkedin.com/in/siddhartha-gurrapu-8b8069263/
- **Email:** gurrapusiddhartha2004@gmail.com

---

*This project was built for educational and portfolio purposes to demonstrate full stack development skills.*
