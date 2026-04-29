# ⚙️ EstateHub Backend (API)

This is the core API engine for EstateHub, built with **Django** and **Django REST Framework (DRF)**. It handles property data management, user authentication, and secure token issuance.

---

## 🛠️ Tech Stack & Features

- **Django 5.0+**: High-level Python Web framework.
- **Django REST Framework (DRF)**: Toolkit for building Web APIs.
- **SimpleJWT**: Provides JSON Web Token authentication.
- **CORS Headers**: Configured to handle Cross-Origin Resource Sharing with the React frontend.

---

## 🚀 Installation & Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Create and activate a virtual environment:**

```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# Mac/Linux
python -m venv venv
source venv/bin/activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Apply database migrations:**

```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Start the development server:**

```bash
python manage.py runserver 8001
```

## 📘 API Documentation (Endpoints)

### 🔐 Authentication

| Method | Endpoint              | Description                                           |
| ------ | --------------------- | ----------------------------------------------------- |
| POST   | `/api/token/`         | Submit credentials to receive Access & Refresh tokens |
| POST   | `/api/token/refresh/` | Submit Refresh token to receive a new Access token    |

---

### 🏠 Property Management

| Method | Endpoint           | Description                   | Auth Required |
| ------ | ------------------ | ----------------------------- | ------------- |
| GET    | `/api/properties/` | List all available properties | ✅ Yes        |
| POST   | `/api/properties/` | Create a new property listing | ✅ Yes        |

---

## 🔒 Security Configuration

- **Authentication Class:** `JWTAuthentication` is set as the default authentication method.
- **Token Lifetime**
  - Access Token: **60 minutes**
  - Refresh Token: **1 day**
- **CORS:** Only allowed origins (e.g., `localhost:5173`) can access the API.

---

## ⚠️ Current Limitations

- **SQLite Database:** Used for local development only.
- **Image Handling:** Property images are not yet linked to cloud storage.

---

## 🔮 Future Improvements

- **Registration Endpoint:** Allow new users to sign up via API.
- **PostgreSQL Integration:** Upgrade database for production stability.
- **Permission Classes:** Fine-grained permissions (e.g., only owners can edit properties).
