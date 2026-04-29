# 💻 EstateHub Frontend (React)

This is the user interface for the EstateHub platform, built with **React** and powered by **Vite** for high performance. It features a secure login system and a protected dashboard for property management.

---

## 🛠️ Tech Stack & Features

- **React 18**: Component-based UI library.
- **Vite**: Ultra-fast build tool and development server.
- **Axios**: Promise-based HTTP client for API communication.
- **React Router 6**: Dynamic client-side routing.
- **JWT Auth Flow**: Secure handling of access and refresh tokens.

---

## 🚀 Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```

# 💻 EstateHub Frontend (React)

This is the user interface for the **EstateHub** platform, built with **React** and powered by **Vite** for high performance.  
It features a secure login system and a protected dashboard for property management.

---

## 🛠️ Tech Stack & Features

- **React 18** — Component-based UI library
- **Vite** — Ultra-fast build tool and development server
- **Axios** — Promise-based HTTP client for API communication
- **React Router 6** — Dynamic client-side routing
- **JWT Authentication Flow** — Secure handling of access and refresh tokens

---

## 🚀 Installation & Setup

### 1️⃣ Navigate to the frontend directory

```bash
cd frontend
```

## 🔑 Key Features & Logic

### 🛡️ Protected Routes

The application uses a **ProtectedRoute** component that checks for the existence of an access token in `localStorage`.  
If no token is found, the user is automatically redirected to the `/login` page.

---

### 🔄 Axios Interceptors

- **Request Interceptor**  
  Automatically attaches the header:

  ```http
  Authorization: Bearer <token>
  ```

- **to every outgoing request sent to the backend.**
  Intercepts 401 Unauthorized responses.
  If the access token expires, the application automatically calls:

```bash
/api/token/refresh/
```

to obtain a new access token and retry the original request without interrupting the user session.

## 📁 Project Structure

- `src/api.js` — Centralized Axios configuration and interceptors
- `src/Login.jsx` — User login form and authentication logic
- `src/PropertiesList.jsx` — Dashboard for viewing and adding properties
- `src/App.jsx` — Routing configuration and Protected Route logic

---

## ⚠️ Current Limitations

- **Local Storage:** Tokens are stored in `localStorage` for simplicity (potential XSS exposure).
- **Basic Styling:** UI is functional but lacks advanced CSS and responsive design.
- **Prop Validation:** Some components use basic PropTypes validation.

---

## 🔮 Future Improvements

- **Tailwind CSS Integration** — Modern, responsive UI design
- **State Management** — Implement Redux or Context API for global state handling
- **Form Validation** — Integrate Formik or React Hook Form
- **User Profile Page** — Allow users to manage their property listings
