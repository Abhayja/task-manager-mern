import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/NavBar";

// Toggle this to true when designing/testing without login
const DEV_MODE = false;

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {/* Navbar only when user exists OR in dev mode */}
      {(user || DEV_MODE) && <Navbar />}

      <Routes>
        {/* Dashboard */}
        <Route
          path="/"
          element={
            DEV_MODE
              ? <Dashboard />   // Dev mode: always show
              : user
                ? <Dashboard /> // Auth mode: show only if logged in
                : <Navigate to="/login" />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            DEV_MODE
              ? <Login />       // Still accessible in dev mode
              : !user
                ? <Login />
                : <Navigate to="/" />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            DEV_MODE
              ? <Register />
              : !user
                ? <Register />
                : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
