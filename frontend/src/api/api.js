import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001/api/",
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,

  async (err) => {
    const originalRequest = err.config;

    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refresh =
          localStorage.getItem(
            "refresh"
          );

        const response =
          await axios.post(
            "http://localhost:8001/api/token/refresh/",
            { refresh }
          );

        const newAccess =
          response.data.access;

        localStorage.setItem(
          "access",
          newAccess
        );

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (err) {
        console.error(
          "Session expired, logging out...",
          err
        );
        localStorage.removeItem(
          "access"
        );
        localStorage.removeItem(
          "refresh"
        );
        window.location.href = "/login";
      }
    }

    return Promise.reject(err);
  }
);

export default api;
