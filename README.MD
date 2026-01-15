# Chatify

![Status](https://img.shields.io/badge/Status-Live-success)
![MERN](https://img.shields.io/badge/Stack-MERN-blue)

**A production-ready real-time messaging platform built for performance and scalability.**
Chatify enables instant communication with secure authentication, persistent storage, and a modern responsive interface.

**Live Demo:** [https://chatify-lovat.vercel.app/)

![App Screenshot](frontend/public/screenshot-for-readme.png)

---

## Tech Stack

* **Frontend:** React, TailwindCSS, DaisyUI, Zustand
* **Backend:** Node.js, Express
* **Database:** MongoDB, Mongoose
* **Real-time:** Socket.io (WebSockets)
* **Security:** JWT (HttpOnly Cookies), Arcjet, BCrypt

---

## Key Features

* **Real-time Messaging:** Instant bi-directional communication using Socket.io.
* **Secure Authentication:** Custom JWT implementation with HttpOnly cookies.
* **Global State Management:** Optimized state handling with Zustand.
* **Media Support:** Image uploads and storage via Cloudinary.
* **Online Presence:** Accurate online/offline status indicators.
* **Dynamic Theming:** 32+ theme options with persistent user preference.

---

## Technical Highlights

* **Concurrency:** Implemented Socket.io to handle multiple concurrent user connections with low latency.
* **Security:** Secured API endpoints against abuse using Arcjet rate-limiting and protected routes.
* **Deployment:** Configured a split-stack deployment pipeline (Render for Backend, Vercel for Frontend).

---

## Run Locally

**1. Clone the repository**
```bash
git clone [https://github.com/Siddharthag2004/chatify-portfolio.git](https://github.com/Siddharthag2004/chatify-portfolio.git)

## 🛠️ How to Run Locally
If you want to test this on your machine:

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/chatify.git](https://github.com/YOUR_USERNAME/chatify.git)
    ```
2.  **Install Dependencies:**
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```
3.  **Setup .env file:**
    Create a `.env` file in the backend folder with your MongoDB URI and API keys.
4.  **Run the App:**
    ```bash
    # Terminal 1 (Backend)
    npm run dev
    
    # Terminal 2 (Frontend)
    npm run dev
    ```

---

## 📬 Connect with Me
I am a 2026 Batch student looking for **Software Developer / Web Developer** roles.

* **LinkedIn:** [Add your LinkedIn URL]
* **Email:** [Add your Email]

---
*This project was built for educational purposes to demonstrate my skills in Full Stack Development.*
# Chatify

A production-ready real-time messaging platform built for performance and scalability.  
Chatify enables instant communication with secure authentication, persistent storage, and a modern responsive interface.

Live Demo:  
https://chatify-f3510j6fi-siddharthag2004s-projects.vercel.app/login

---

## Tech Stack

Frontend:
- React
- TailwindCSS
- DaisyUI
- Zustand

Backend:
- Node.js
- Express

Database:
- MongoDB
- Mongoose

Real-time:
- Socket.io (WebSockets)

Security:
- JWT (HttpOnly Cookies)
- Arcjet
- BCrypt

---

## Key Features

- Real-time bi-directional messaging using Socket.io  
- Secure authentication with custom JWT and HttpOnly cookies  
- Global state management using Zustand  
- Image upload and storage with Cloudinary  
- Online/offline user presence indicators  
- 32+ dynamic themes with persistent user preference  

---

## Technical Highlights

- Handles multiple concurrent users with low-latency real-time communication  
- API protection using Arcjet rate limiting and secured routes  
- Split-stack deployment (Render for Backend, Vercel for Frontend)  

---

## How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Siddharthag2004/chatify-portfolio.git
```

2. Install dependencies:
```bash
cd backend && npm install
cd ../frontend && npm install
```

3. Setup environment variables:

Create a `.env` file inside the backend folder and add:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

4. Run the application:

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

Siddhartha Gurrapu  
2026 Batch | Software Developer / Web Developer  

LinkedIn: https://www.linkedin.com/in/siddhartha-gurrapu-8b8069263/  
Email: gurrapusiddhartha2004@gmail.com  

---

This project was built for educational and portfolio purposes to demonstrate full stack development skills.
