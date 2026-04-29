import { useState } from "react";
import api from "./api/api"; // ملف الـ axios اللي عملناه

function Login() {
  const [username, setUsername] =
    useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "token/",
        { username, password }
      );
      // تخزين المفاتيح في المتصفح
      localStorage.setItem(
        "access",
        res.data.access
      );
      localStorage.setItem(
        "refresh",
        res.data.refresh
      );

      alert("تم تسجيل الدخول بنجاح!");
      window.location.href = "/"; // توجيه المستخدم لصفحة العقارات
    } catch (err) {
      alert(
        "خطأ في اسم المستخدم أو كلمة المرور"
      );
      console.error(err);
    }
  };

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h2>تسجيل الدخول - EstateHub</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />
        <br />
        <br />
        <button type="submit">
          دخول
        </button>
      </form>
    </div>
  );
}

export default Login;
