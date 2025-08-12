import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-blue-500 flex justify-between items-center px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        TaskManager
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">Hi, {user?.user?.name}</span>
          <button
            onClick={logout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4 text-sm">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
