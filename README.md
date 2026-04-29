# 🏠 EstateHub

EstateHub is a modern **property management platform** designed to provide a secure and seamless experience for listing and viewing real estate properties.

This project demonstrates a full integration between a **Django REST Framework (DRF)** backend and a **React (Vite)** frontend using a decoupled architecture.

---

## 🏗️ Project Architecture

The system follows a **decoupled full-stack architecture**:

- **Backend:** Provides a robust RESTful API with secure JWT authentication.
- **Frontend:** A fast, responsive Single Page Application (SPA) built with React.
- **Security:** Implements JSON Web Tokens (JWT) for secure communication and protected routes.

---

## 🛠️ Tech Stack

### 🔧 Backend

- Django
- Django REST Framework
- SimpleJWT — Token-based authentication (Access & Refresh Tokens)
- CORS Headers — Secure frontend communication

### 🎨 Frontend

- React (Vite)
- React Router — Client-side navigation
- Axios — API communication with interceptors for token management

---

## 🚀 Setup and Installation

### 1️⃣ Prerequisites

- Python 3.x
- Node.js & npm

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8001
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔑 Authentication Flow

EstateHub uses a secure **JWT-based authentication flow**:

### Login

User submits credentials to:

```bash
/api/token/

```

### Token Storage

Access and Refresh tokens are stored in the browser `localStorage`.

### Authorization

Axios Interceptors automatically attach the **Bearer token** to every request.

### Auto Refresh

When the access token expires (`401 Unauthorized`), the refresh token automatically generates a new access token without logging the user out.

---

## ⚠️ Current Limitations

- **Database:** SQLite is used for development.
- **Hardcoded Ownership:** Some property ownership logic uses static user IDs for testing.
- **UI:** Basic styling implemented — full responsive UI is still in progress.

---

## 🔮 Future Improvements

- Media uploads using **AWS S3** or **Cloudinary**
- Map integration using **Google Maps** or **Leaflet**
- Public user registration system
- Full UI redesign using **Tailwind CSS**

---

## 👨‍💻 Author

**Mohamed Shaban**  
Full Stack Developer — Django • DRF • React • PostgreSQL

---

## ⭐ Project Purpose

This project was built as a **full-stack portfolio project** demonstrating:

- Secure authentication systems
- REST API design
- Modern frontend architecture
- Backend–Frontend integration
- Production-ready application structure
