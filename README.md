🚀 Full-Stack Portfolio CMS

production-ready full-stack portfolio application with admin dashboard, authentication, image uploads, and analytics.

- 🔗 Frontend: https://portfolio-one-omega-obp8ye20u6.vercel.app
- 🔗 Backend API: https://portfolio-knr6.onrender.com
---

📌 Features

- 🔐 Admin Authentication (JWT)
- 🖼️ Image Upload System (Multer)
- 📊 Project Analytics (View Tracking)
- ⚛️ React Frontend (Vite)
- 🌐 REST API (Node.js + Express)
- 🗄️ MongoDB Database
- 🛡️ Security (Helmet, Rate Limiting, CORS)

---

🧱 Tech Stack

Frontend

- React
- Vite
- Axios
- React Router

Backend

- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File Upload)

---

📁 Project Structure

portfolio/
 ├── frontend/
 └── backend/

---

⚙️ Installation (Local Setup)

1. Clone Repo

git clone https://github.com/Donspark23/portfolio.git
cd portfolio

---

2. Backend Setup

cd backend
npm install

Create ".env":

MONGO_URI=your_mongodb_connection
ADMIN_EMAIL=admin@yourapp.com
ADMIN_PASSWORD=yourpassword
JWT_SECRET=yoursecret

Run:

node createAdmin.js
node server.js

---

3. Frontend Setup

cd frontend
npm install
npm run dev

---

🔐 Admin Access

- Login via "/login"
- Access dashboard via "/admin"

---

📊 API Endpoints

Method| Endpoint| Description
POST| /api/auth/login| Admin login
GET| /api/projects| Get projects
POST| /api/projects| Add project
DELETE| /api/projects/:id| Delete project
PUT| /api/projects/:id/view| Track views

---

🚀 Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

👤 Author

Uchenna Chidera Onyesom

- 🌍 Abuja, Nigeria
- 💼 Full Stack Developer
- 📧 onyuchennachidera@gmail.com
- 🔗 GitHub: https://github.com/Donspark23

---

⭐ Support

If you like this project, give it a star ⭐
