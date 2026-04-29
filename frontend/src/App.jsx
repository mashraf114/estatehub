import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import PropertiesList from "./PropertiesList"; // هننقل كود العقارات لملف منفصل
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const token =
    localStorage.getItem("access");
  return token ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        {/* صفحة العقارات محمية: لو مش مسجل دخول مش هتعرف تدخلها */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PropertiesList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
