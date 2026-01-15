# 💬 Real-Time Chat Application (MERN Stack)

![Status](https://img.shields.io/badge/Status-Learning%20Project-blue)
![Tech](https://img.shields.io/badge/Stack-MERN-green)

Hi! I'm **Siddhartha**, an EEE student passionate about breaking into the IT sector.

This is my capstone project to master **Full-Stack Web Development**. I built this real-time chat app to understand how modern web apps handle instant communication, secure authentication, and database management.

👉 **[Live Demo Link Here - Add your Vercel Link later]**

---

## 🎯 Why I Built This?
Coming from an Electrical Engineering background, I wanted to challenge myself with a complex software project. I followed a project-based learning approach to understand:
* How **WebSockets** (Socket.io) differ from standard HTTP requests.
* How to secure user data using **JWT (JSON Web Tokens)** and HttpOnly cookies.
* How to manage global state in a React application using **Zustand** (an alternative to Redux).

---

## 💻 Tech Stack
I chose the **MERN Stack** because it's the industry standard for full-stack JavaScript development.

* **Frontend:** React.js, Tailwind CSS, DaisyUI (for UI components)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (using Mongoose for modeling)
* **Real-time:** Socket.io
* **Security:** JWT, BCrypt, Arcjet (for rate limiting)
* **Tools:** Cloudinary (Image storage), Resend (Email services)

---

## ✨ Features I Implemented
* **Authentication:** Users can sign up and log in securely.
* **Real-Time Messaging:** Messages appear instantly without refreshing the page.
* **Online Status:** You can see who is currently online (green dot indicator).
* **Image Sharing:** Users can upload profile pictures and send images in chat.
* **Theme Switcher:** I added 32+ different color themes (using DaisyUI).

---

## 🚀 Challenges & Learnings
Building this wasn't easy! Here are some hurdles I overcame:
1.  **CORS Errors:** I spent a lot of time fixing connection issues between the Frontend (port 5173) and Backend (port 5001).
2.  **Environment Variables:** I learned how important `.env` files are for keeping API keys secure and not exposing them on GitHub.
3.  **Deployment:** I learned how to deploy a split-stack app using **Render** (Backend) and **Vercel** (Frontend).

---

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