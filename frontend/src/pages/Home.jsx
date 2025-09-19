import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const { isAuthenticated, user } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 text-white">
      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md shadow-lg">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyApp
        </Link>

        <div className="space-x-4">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-300 mr-3">
                {user?.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* 🔹 Main Content */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] px-6">
        <div className="backdrop-blur-lg bg-white/10 p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight">
              Welcome, {user?.name || "Guest"} 👋
            </h1>
            <p className="text-gray-300 text-sm">
              {user?.email || "No email provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
